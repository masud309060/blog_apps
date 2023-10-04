const getFullName = (firstName: string, lastName: string) => {
  let fullName = "";
  if (firstName) fullName += firstName + " ";
  if (lastName) fullName += lastName;
  return fullName;
};

export default getFullName;
