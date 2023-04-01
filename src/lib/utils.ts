export const getEnumIndexByEnumValue = (myEnum: any, enumValue: string | number): number => {
  return Object.keys(myEnum).findIndex((x) => myEnum[x] === enumValue);
};

export const capitalizeWord = (word: string) => {
  return `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`;
}