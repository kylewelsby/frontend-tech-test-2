function flatten(input) {
  if (typeof input === "object") {
    return flattenInner(Object.values(input), flatten);
  } else if (Array.isArray(input)) {
    return flattenInner(input, (item) =>
      Array.isArray(item) ? flatten(item) : item
    );
  } else {
    return input;
  }
}

function flattenInner(input, fn) {
  return input.reduce((acc, item) => acc.concat(fn(item)), []);
}

module.exports.flatten = flatten;
