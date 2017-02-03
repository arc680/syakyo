var data = ['hoge', 'fuga', 'piyo'];
Array.prototype.ababa = function() {}
for (var value of data) {
  console.log(value);
}
