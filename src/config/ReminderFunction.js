class ReminderFunction {
    static months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    static getDisplayDate(dateStr) {
        const date = new Date(dateStr);
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        var year = date.getFullYear();
        var finalDate = day + '-' + month + '-' + year;
        return finalDate;
    }

    static getDisplayTime(dateStr) {
        const date = new Date(dateStr);
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var time = hours + ":" + minutes + " " + am_pm;
        return time;
    }

    static getDisplayReminderDate(dateStr) {
        if (dateStr !== '') {
            let currentDate = new Date();
            let tomDate = new Date();
            tomDate.setDate(currentDate.getDate() + 1);
            let newDate = new Date(dateStr);
            if (this.getDisplayDate(newDate) === this.getDisplayDate(currentDate)) {
                return `Today, ${this.getDisplayTime(newDate)}`;
            } else if (this.getDisplayDate(newDate) === this.getDisplayDate(tomDate)) {
                return `Tommarow, ${this.getDisplayTime(newDate)}`;
            } else if (newDate.getFullYear() === currentDate.getFullYear()) {
                let day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
                return `${day} ${this.months[newDate.getMonth()]}, ${this.getDisplayTime(newDate)}`;
            } else {
                let day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
                return `${day} ${this.months[newDate.getMonth()]} ${newDate.getFullYear()}, ${this.getDisplayTime(newDate)}`;
            }
        } else {
            return '';
        }
    }

    static getDefaultDate(date, time) {
        const dateParts = date.toString().split('-');
        const defaultDateStr = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]} ${time}`;
        return new Date(defaultDateStr).toString();
    }
}
export default ReminderFunction;