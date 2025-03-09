class StorageHelper {
  static getValue(keyName, defaultValue) {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  }

  static setValue(keyName, newValue) {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log("setValue err: ", err);
    }
  }

  static clearAll() {
    window.localStorage.clear();
  }
}

export default StorageHelper;
