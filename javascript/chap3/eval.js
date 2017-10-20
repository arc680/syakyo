var obj = {
  hoge: 1,
  huga: 2
};
var prop = 'hoge';

eval('console.log(obj.' + prop + ')');
console.log(obj[prop]);
