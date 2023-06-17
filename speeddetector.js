//created a varibale to hold the users input
const speedInput = prompt('Input speed')
const speed = parseInt(speedInput);

//created a function the takes the users speed as an argument an calculates the demerit points if the speed is greater than 70
function speedDetector(speed) {
//created a vairbale called demeritPoints that claculates the demerit points
  const demeritPoints = Math.floor((speed - 70) / 5);

  if (speed <= 70) {
    document.write('Ok');
  } else {
    if (demeritPoints > 12) {
      document.write('License suspended exceded limit.' + "<br>" + 'Points:' + demeritPoints);
    } else {
      document.write('Points:', demeritPoints);
    }
  }
}

speedDetector(speed);
