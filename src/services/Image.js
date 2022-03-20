import { Device } from "./Device";
import { Storage } from "./Storage";
import { Time } from "./Time";

export class Image {
  static baseUri = process.env.REACT_APP_BASE_URL;
  static params = `&query=background`; // Params of the source here https://unsplash.com/documentation#get-a-random-photo

  static async getImage() {
    const savedData = this.checkIfSaveRecentImage()
    if(savedData.result) return savedData.data;
    const orientation = Device.getOrientation();
    const url = `${this.baseUri}photos/random?orientation=${orientation}&client_id=${process.env.REACT_APP_ACCESS_KEY}${this.params}`;
    const response = await fetch(url);
    const data = await response.json();
    const transformData = {
      imageUrl: this.transformImage(data.urls.raw),
      imageColor: data.color,
      author: this.getAuthorData(data.user),
      requestedIn: Time.getTime(),
    };
    Storage.set("welcome-bg-image", transformData);
    return transformData;
  }

  static transformImage(imageUrl) {
    const { width, height } = Device.getDimensions();
    const DeviceType = Device.getType();
    const size = `${DeviceType === "desktop" ? `&w=${width}` : `&h=${height}`}`;
    return `${imageUrl}${size}&fit=max&fm=jpg`; // Low quality to better weight
  }

  static getAuthorData(user) {
    return {
      name: user.name,
      profile: user.links.html,
      avatar: user.profile_image.small,
      instagram: user.instagram_username,
    };
  }

  static checkIfSaveRecentImage() {
    const storageData = Storage.get("welcome-bg-image");
    if (
      storageData && 
      Time.diffInSeconds(storageData.requestedIn) < 30 // Seconds to make a new call
    ) {
      return { result: true, data: storageData };
    }
    return { result: false };
  }

  static getFavicon(link) {
    const url = (new URL(link)).hostname;
    return `https://api.faviconkit.com/${url}/32`;
  }
}
