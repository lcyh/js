
/**
 * 省市区三级联动转换
 * @param {*} data 
 */
const mockJson = require('./index.json')

const transform = (data = {}) => {
    return Object.entries(data).reduce((buf, [key, value]) => {
      if (typeof value === "string")
        return buf.concat({
          label: value,
          value: key
        });
      const { name, code, cities, districts } = value;
      const _cities = transform(cities);
      const _districts = transform(districts);
      return buf.concat({
        label: name,
        value: code,
        children: _cities.length
          ? _cities
          : _districts.length
          ? _districts
          : undefined
      });
    }, []);
  };
  console.log('transform',JSON.stringify(transform(mockJson),null,2));


//   let test = Object.entries({});
//   console.log('test',test); // []