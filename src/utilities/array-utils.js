function paginate(items, pageNumber, pageSize) {
  const array = [...items];
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export default {
  paginate,
};
