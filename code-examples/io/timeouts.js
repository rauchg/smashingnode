var start = Date.now();

setTimeout(function () {
  console.log(1000);

  for (var i = 0; i < 2000000000; i++){}
}, 1000);

setTimeout(function () {
  console.log(Date.now() - start);
}, 2000);
