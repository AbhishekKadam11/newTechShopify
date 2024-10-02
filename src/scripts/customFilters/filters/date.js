import vue from 'vue';

vue.filter('myFilter', value => {
  return value.toUpperCase();
});