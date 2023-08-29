class D {
  // Challenge 1
  constructor(...args) {
    this._date = new Date(...args);
  }

  // Challenge 2
  get year() {
    return this._date.getFullYear();
  }

  get yr() {
    return this._date.getFullYear().toString().slice(-2);
  }
  get month() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
    ];
    return months[this._date.getMonth()];
  }
  get mon() {
    return this.month.slice(0, 3);
  }

  get day() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[this._date.getDay()];
  }

  get dy() {
    return this.day.slice(0, 3);
  }

  get date() {
    return this._date.getDate();
  }

  get hours() {
    return this._date.getHours();
  }

  get mins() {
    return this._date.getMinutes();
  }

  get secs() {
    return this._date.getSeconds();
  }

  // Challenge 3
  format(mask = "Y M D") {
    let result = "";
    for (let char of mask) {
      switch (char) {
        case "Y":
          result += this.year;
          break;
        case "y":
          result += this.yr;
          break;
        case "M":
          result += this.month;
          break;
        case "m":
          result += this.mon;
          break;
        case "D":
          result += String(this.date).padStart(2, "0");
          break;
        case "d":
          result += this.date;
          break;
        case "#":
          result += String(this.dy).padStart(2, "0");
          break;
        case "H":
          result += String(this.hours).padStart(2, "0");
          break;
        case "h":
          result += this.hours;
          break;
        case "I":
          result += String(this.mins).padStart(2, "0");
          break;
        case "i":
          result += this.mins;
          break;
        case "S":
          result += String(this.secs).padStart(2, "0");
          break;
        case "s":
          result += this.secs;
          break;
        default:
          result += char;
      }
    }
    return result;
  }
}

// With no parameters:
const a = new D();
// Create a date from a string (single parameter)
const b = new D("9/26/1965");
// Create a date from some numbers (list of parameters)
const c = new D(1970, 1, 1, 0, 0, 0);
// With a Date
const d = new D(new Date());

// console log area
let testing = true;
if (testing == true) {
  // Challenge 1
  console.log("------------------Challenge 1------------------");
  console.log(a._date);
  console.log(b._date);
  console.log(c._date);
  console.log(d._date);

  // Challenge 2
  console.log("------------------Challenge 2------------------");
  console.log("Full year:", d.year); // 2021 - Full year
  console.log("Short year:", d.yr); // 21   - Short year
  console.log("Full month:", d.month); // July - Full month
  console.log("Short month:", d.mon); // Jul  - Short month
  console.log("Full day:", d.day); // Tuesday - Full day
  console.log("Short day:", d.dy); // Tue  - Short day
  console.log("Date:", d.date); // 27   - Date
  console.log("Hour:", d.hours); // 18   - Hour
  console.log("Minutes:", d.mins); // 6    - Minutes
  console.log("Seconds:", d.secs); // 5    - Seconds

  // Challenge 3
  console.log("------------------Challenge 3------------------");
  // const d = new D(2017, 0, 2, 3, 4, 5);
  console.log(d.format()); // 2017 January 02
  console.log(d.format("y/m/d")); // 17/Jan/2
  console.log(d.format("H:I:S")); // 03:04:05
  console.log(d.format("h:i:s")); // 3:4:5
  console.log(d.format("Y-M-D h:I:S")); // 2017-January-02 3:04:05
}
