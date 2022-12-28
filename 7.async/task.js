// "use strict";

class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
   }

   addClock(time, callback) {
    if(!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
    }
    else if (this.alarmCollection.some(alarm => alarm.item === time)) {
        console.warn('Уже присутствует звонок на это же время')
    }
    this.alarmCollection.push({time, callback, canCall: true});
   }

   removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
   }

   getCurrentFormattedTime() {
    // let format = t => String(t).padStart(2, '0');
    // return format(new Date().getHours()) + ':' + format(new Date().getMinutes());
    return new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
   }

   start() {
    if (this.intervalId) {
        return;
    }
    this.intervalId = setInterval(() => this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
        }
    }), 1000);
   }

   stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
   }

   resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
   }

   clearAlarms() {
    this.stop();
    this.alarmCollection = [];
   }
}
