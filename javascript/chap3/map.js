let m = new Map();

m.set('dog', 'aaaa');
m.set('cat', 'bbbb');
m.set('mouse', 'cccc');

console.log(m);
console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

for (let [key, value] of m) {
  console.log(key + ':' + value);
}
