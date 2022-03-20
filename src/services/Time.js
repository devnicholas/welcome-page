export class Time {
    static getTime() {
        return new Date().getTime();
    }
    static diffInSeconds(time) {
        return Math.floor((this.getTime() - time) / 1000);
    }
    static getLocalTime() {
        return new Date().toLocaleString();
    }
    static getWeekDay() {
        const weekDays = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado",
        ];
        return weekDays[new Date().getDay()];
    }
    static getDate() {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}`;
    }
    static getHour(){
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    static getSalutation() {
        const hour = this.getHour();
        const hourNumber = Number(hour.split(":")[0]);
        if (hourNumber >= 3 && hourNumber < 12) { // Between 3 am and 12 hours is morning
            return "Bom dia";
        } else if (hourNumber >= 12 && hourNumber < 18) { // Between 12 and 18 hours is afternoon
            return "Boa tarde";
        } else {
            return "Boa noite";
        }
    }
}