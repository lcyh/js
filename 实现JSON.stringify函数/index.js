/*
 * @Author: changluo
 * @Description: JSON.stringify
 */
// 
function jsonStringify(data){
    let result = '';
    var type = typeof data;
    if(type !== 'object' || data === null ){
      // 基础类型在此处理
      result = data;
      if(type == 'number' &&(Number.isNaN(data) || !Number.isFinite(data))){
        // 规则8:NaN 和 Infinity格式的数值会被当做 null。
        result = "null";
      }else if(type == 'function' || type == 'undefined' || type == 'symbol'){
        // 规则4:函数、undefined 被单独转换时，会返回 undefined，
        result = "undefined";
      }else if(type == 'string'){
        result = `"${data}"`
      }
      result = String(result);
    }else{
      if(data.toJSON && typeof data.toJSON =='function'){
        //规则1:转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
        result+=jsonStringify(data.toJSON())
      }else if(data instanceof Array){
        result = [];
        data.forEach((item,index)=>{
          let itemType = typeof item;
          // 规则4:undefined、任意的函数以及 symbol 值，出现在数组中时,被转换成 null
          if(itemType == 'undefined' || itemType =='function' || itemType =='symbol'){
            result[index]="null";
          }else{
            result[index]=jsonStringify(item);
          }
        })
        result = `[${result}]`
      }else{
        result = [];
        Object.keys(data).forEach((item,index)=>{
          // 规则6:所有以 symbol 为属性键的属性都会被完全忽略掉，Object.keys返回包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
          let valueType = typeof data[item];
          if(valueType == 'undefined' || valueType =='function' || valueType =='symbol'){
            // 规则4:undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）
          }else if(data[item] == data){
            // 规则5:对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
            throw "cycling";
          }else{
            result.push(`"${item}":${jsonStringify(data[item])}`);
          }
        })
        result = `{${result}}`
      }
    }
    return result;
  }
  





