const friendeAges = [12, 23, 43, 65, -90, -45, -34,45,-96,110];

function findBadData(array) {
  const badData = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      badData.push(array[i]);
    }
  }

  return {
    badData: badData,
    count: badData.length
  };
}

const result = findBadData(friendeAges);
console.log("Bad Data:", result.badData);
console.log("Count of Bad Data:", result.count);

