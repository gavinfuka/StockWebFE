class Accessor {
  /**
   * Get content by "xxx.xxx.xxx" instead of o[xxx][xxx][xxx]
   * @param {*} obj
   * @param {string} accessor
   */
  static Get(obj, accessor) {
    if (!accessor || !obj) return "";
    let fields = accessor.split(".");
    let rtn = obj;

    for (let i = 0; i < fields.length; i++) {
      if (rtn === null || rtn === undefined) return "";
      rtn = rtn[fields[i]];
    }

    return rtn;
  }

  /**
   * Set content by "xxx.xxx.xxx" instead of o[xxx][xxx][xxx]
   * @param {*} obj
   * @param {string} accessor
   * @param {*} value
   */
  static Set(obj, accessor, value) {
    if (value === undefined) return;
    if (typeof accessor == "string") {
      return this.Set(obj, accessor.split("."), value);
    } else if (accessor.length === 1 && value !== undefined) {
      return (obj[accessor[0]] = value);
    } else if (accessor.length === 0) {
      return obj;
    } else {
      if (!obj[accessor[0]]) obj[accessor[0]] = {};
      return this.Set(obj[accessor[0]], accessor.slice(1), value);
    }
  }
}

export default Accessor;
