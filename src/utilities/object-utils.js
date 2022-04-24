function findValue(obj, pattern) {
  let result = false;
  if (!pattern) {
    return result;
  }
  const search = String(pattern);
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
      result = findValue(obj[key], search);
    } else {
      result = obj[key].toString().toLowerCase().includes(search.toLowerCase());
    }

    if (result) {
      return result;
    }
  }
  return result;
}

function isEmpty(obj) {
  return obj.constructor === Object && Object.keys(obj).length === 0;
}

export default {
  findValue,
  isEmpty,
};
