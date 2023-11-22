function TimeConvert(num: string) {
    let hours = Math.floor(parseInt(num) / 60);
    let minutes = parseInt(num) % 60;
    return hours + ":" + minutes;
  }
  let str = "1230";
  console.log(TimeConvert(str))