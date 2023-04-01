/**
 * generic function to get Enum key from a Enum value
 * @param enumType a typescript Type
 * @param enumValue string value
 */
export const getEnumKeyFromEnumValue = (enumType: any, enumValue: string | number): any => {
  const keys: string[] = Object.keys(enumType).filter((x) => enumType[x] === enumValue);
  if (keys.length > 0) {
    return keys[0];
  } else {
    // throw error to caller function
    // throw new Error(`Invalid enum value '${enumValue}'! Valid enum values are ${Object.keys(myEnum)}`);
    throw new Error(`Invalid enum value '${enumValue}'! Valid enum value(s() are ${Object.values(enumType)}`);
  }
};

/**
 * generic function to get Enum value from a Enum key
 * @param enumType a typescript Type
 * @param enumValue string value
 */
export const getEnumValueFromEnumKey = (enumType: any, enumKey: string | number): any => {
  // use getEnumKeyByEnumValue to get key from value
  const keys = Object.keys(enumType).filter((x) => getEnumKeyFromEnumValue(enumType, enumType[x]) === enumKey);
  if (keys.length > 0) {
    // return value from equality key
    return enumType[keys[0]];
  } else {
    // throw error to caller function
    throw new Error(`Invalid enum key '${enumKey}'! Valid enum key(s() are ${Object.keys(enumType)}`);
  }
};

/**
 * helper to convert string environment variable to boolean
 */
export const isTrue = (value: string): boolean => {
  return (value.toString().toLowerCase() === 'false' || !value || value === '0')
    ? false
    : true;
};
