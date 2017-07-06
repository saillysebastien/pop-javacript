function fibo(i) {
  if (i<2) {
    return i ;
  }
  else {
    return fibo(i-2) + fibo(i-1);
  }
}

for (var i = 0; i < 2500; i++) {
  var result = fibo(i);
  console.log(result);
}
