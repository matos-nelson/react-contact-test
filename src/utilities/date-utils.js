function format(date) {
  const month = date.getMonth() + 1;
  return month + "/" + date.getDate() + "/" + date.getFullYear();
}

export default {
  format,
};
