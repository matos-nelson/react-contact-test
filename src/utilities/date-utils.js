function format(date) {
  const dateParsed = new Date(Date.parse(date));
  const month = dateParsed.getMonth() + 1;
  return month + "/" + dateParsed.getDate() + "/" + dateParsed.getFullYear();
}

export default {
  format,
};
