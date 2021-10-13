const myBirthday = "22 Oct 2021";

function countdown() {
  const myBirthdayDate = new Date(myBirthday);
  const currentDate = new Date();

  const totalSeconds = new Date(myBirthdayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = math.floor(totalSeconds) % 60;

  console.log(days, hours, minutes, seconds);
}

//initial call

countdown();

setInterval(countdown, 1000);
