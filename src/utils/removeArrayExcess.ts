const removeArrayExcess = (list: any[], limit: number) => {
  const { length } = list;

  const excess = length - limit;

  const newList = list.slice(0, length - excess);

  return newList;
};

export default removeArrayExcess;
