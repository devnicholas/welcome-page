export class Device {
    static getDimensions(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    static getOrientation(){
        return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
    }
    static getType(){
        if(window.innerWidth <= 768) return "mobile";
        return "desktop";
    }
}