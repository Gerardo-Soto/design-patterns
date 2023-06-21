// this is and error:
//await
// because we need a asynchronous context to use await, their Scope should be asynchronous

// anonymous function
// (() => {})();
(async() => {
  function delay(time: number) {
    const promise = new Promise<Number>((resolve, reject) => {
      setTimeout(() => {
        resolve(9%4);
      }, time);
    });
    return promise
  }


  const answer = await delay(3000);
  console.log(answer);

})();
