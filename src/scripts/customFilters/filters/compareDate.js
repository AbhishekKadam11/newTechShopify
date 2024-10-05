import * as Vue from 'vue';

// vue.filter('myFilter', value => {
//   console.log('myFilter', value)
//   return value.toUpperCase();
// });

export default function (value) {
  console.log("value=>",value)
  return value.toUpperCase();
}

// Vue.filter("currency", value => {
//   if (value >= 0) {
//     return "$" + value.toFixed(2).toLocaleString();
//   }
//   return null;
// });