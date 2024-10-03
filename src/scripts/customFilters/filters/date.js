import vue from 'vue';

// vue.filter('myFilter', value => {
//   console.log('myFilter', value)
//   return value.toUpperCase();
// });

export default function (value) {
  return value.toUpperCase();
}