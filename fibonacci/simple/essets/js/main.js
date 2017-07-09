function fibo() {
  var n1=0, n2=1, n;
  for (var i = 0; i < 250; i++) {
    var result= n1 + n2;
    console.log(result);
    n1 = n2;
    n2=result;
  }
}
fibo();
