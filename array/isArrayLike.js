function isArrayLike(o) {
  if (typeof o === "object" &&
    isFinite(o.length) &&
    o.length >= 0 &&
    Math.floor(o.length) === o.length &&
    o.length <= 4294967296)
    return true;
  else
    return false;
}
