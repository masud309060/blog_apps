const compressString = (str: string = "", length:number = 10, showAll: boolean = false) => {
  if (showAll) return str;
  if (str && str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

export default compressString;
