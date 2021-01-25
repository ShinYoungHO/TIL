소수인지 판별
===
```js
function isPrime(num) {
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

```
