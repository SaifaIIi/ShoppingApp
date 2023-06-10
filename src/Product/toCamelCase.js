const toCamelCase = (str) => {
  let inputArray = str.split(" ");
  let result = "";
  for (let i = 0, len = inputArray.length; i < len; i++) {
    let currentStr = inputArray[i];
    let tempStr = currentStr.toLowerCase();
    tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
    result += ` ${tempStr}`;
  }
  return result;
};

export default toCamelCase;
