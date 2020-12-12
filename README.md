# Teste em Node.js modo Raiz

Antigamente não existia Jest e todo mundo usava Mocha e Chai pra fazer teste. Aqui eu deixo um exemplo de como fazer isso.

Além disso, dá pra fazer teste sem framework de teste nenhum.

**add.js**
```js
module.exports = function add (a, b) {
  return a + b
}
```

**add.test.js**
```js
const assert = require('assert')
const add = require('./add')

assert.equal(add(2, 2), 4)
assert.equal(add(3, 4), 7)
assert.equal(add(5, 6), 11)
```

Basta rodar:

```sh
$ node add.test.js
```

Se tudo der certo não aparece nada.