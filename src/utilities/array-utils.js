function paginate(items, pageNumber, pageSize) {
  const array = [...items];
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function convertToOptions(data, config) {
  let options = [];
  if (
    !config ||
    !config.hasOwnProperty("idKey") ||
    !config.hasOwnProperty("valueKey") ||
    !config.hasOwnProperty("labelKey")
  ) {
    return options;
  }

  if (data) {
    data.forEach(
      item =>
        item.hasOwnProperty(config.idKey) &&
        item.hasOwnProperty(config.valueKey) &&
        item.hasOwnProperty(config.labelKey) &&
        options.push({
          id: item[config.idKey],
          value: item[config.valueKey],
          label: item[config.labelKey]
        })
    );
  }

  return options;
}

export default {
  paginate,
  convertToOptions
};
