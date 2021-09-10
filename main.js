let mainFun = () => {
  /* Get The Dom Vars */
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  /* Get Dates */
  const endDate = new Date("Dec 11, 2021 00:00:00").getTime();
  const nowDate = new Date().getTime();
  const dateDiff = endDate - nowDate;
  const secsCount = 1000;
  const minsCount = secsCount * 60;
  const hoursCount = minsCount * 60;
  const daysCount = hoursCount * 24;

  let daysRes = Math.floor(dateDiff / daysCount);
  daysRes = daysRes < 10 ? "0" + daysRes : daysRes;
  let hoursRes = Math.floor((dateDiff % daysCount) / hoursCount);
  hoursRes = hoursRes < 10 ? "0" + hoursRes : hoursRes;
  let minsRes = Math.floor((dateDiff % hoursCount) / minsCount);
  minsRes = minsRes < 10 ? "0" + minsRes : minsRes;
  let secsRes = Math.floor((dateDiff % minsCount) / secsCount);
  secsRes = secsRes < 10 ? "0" + secsRes : secsRes;

  days.textContent = daysRes;
  hours.textContent = hoursRes;
  minutes.textContent = minsRes;
  seconds.textContent = secsRes;
};
setInterval(mainFun, 1000);
