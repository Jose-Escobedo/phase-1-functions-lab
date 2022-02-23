function distanceFromHqInBlocks(num1) {
  let distance = 0;
  if (num1 > 42) {
    distance = num1 - 42;
    return distance;
  } else if (num1 < 42) {
    distance = 42 - num1;
    return distance;
  }
}

function distanceFromHqInFeet(num1) {
  return distanceFromHqInBlocks(num1) * 264;
}

function distanceTravelledInFeet(value1, value2) {
  if (value1 > value2) {
    let sum = (value1 - value2) * 264;
    return sum;
  } else {
    let sum = (value2 - value1) * 264;
    return sum;
  }
}

function calculatesFarePrice(value1, value2) {
  let dist = distanceTravelledInFeet(value1, value2);

  if (dist > 2500) {
    return "cannot travel that far";
  } else if (dist > 2000) {
    return 25;
  } else if (dist > 400) {
    dist = dist - 400;
    dist = dist * 0.02;
    return dist;
  } else if (dist <= 400) {
    return 0;
  }
}

console.log(calculatesFarePrice(50, 58));
