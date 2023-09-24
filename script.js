const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
for (let key1 in sampleObject) {
    if (sampleObject.hasOwnProperty(key1) && key1 === key) {
      return true;
    }
  }
  return false;
}


// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
