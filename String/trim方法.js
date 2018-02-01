String.prototype.trim = String.prototype.trim ||
  function () {
    if (!this) return this;
    return this.replace(/^\s+|\s+$/g, "");
  };

console.log('"' + ' 去除前后空格 '.trim() + '"');
