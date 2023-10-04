const arrayEquals = <T>(a: T[], b: T[]) => {
  return (
    Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val) => b.indexOf(val) !== -1)
  );
};

export default arrayEquals;
