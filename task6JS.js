 function alpha(str) {
    var arr = str.split(""); // splits the string
    res = arr.sort().join(""); // sort the array and joins to form a string
    return res; // returns the result
  }
  console.log("taking VIT INTERNSHIP as a string");
  console.log(alpha("VIT INTERNSHIP"));