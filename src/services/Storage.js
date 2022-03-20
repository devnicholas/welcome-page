export class Storage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getUser() {
    return localStorage.getItem("welcome-user")
      ? this.get("welcome-user")
      : "Visitante";
  }

  static setUser(user) {
    this.set("welcome-user", user);
  }

  static getLinks() {
    return localStorage.getItem("welcome-links")
      ? this.get("welcome-links")
      : [
          { url: "https://www.google.com", name: "Google" },
          { url: "https://www.google.com", name: "Google" },
        ];
  }

  static setLinks(links) {
    this.set("welcome-links", links);
  }
}
