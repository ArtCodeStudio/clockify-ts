export const couldBeJson = (str?: string | null) => {
  if (!str || typeof str !== "string") {
    return false;
  }
  str = str.trim();
  return str.charAt(0) === "{" || str.charAt(0) === "[";
};

/**
   * Test if string is a json string
   * @param str
   */
export const isJson = (str?: string | null) => {
  if (!str || !couldBeJson(str)) {
    return false;
  }
  try {
    const val = JSON.parse(str);
    return Array.isArray(val) || typeof val === "object" ? true : false;
  } catch (_) {
    return false;
  }
};
