/**
 * the 'async' keyword turn any function into
 * a function that can use the 'await' keyword,
 * this allows us to wait for a promise (fetch)
 * to resolve (succeed) on a single line instead
 * of using multiple '.then()'. If 'async' is in front
 * of the function, the function will ALWAYS return a promise
 */
async function awaitPromise() {
  /* createPromise will '.resolve()' which means
   * that we can log the info on the second line,
   * if we where to skip 'await' here, the code
   * will not wait for the promise to resolve */
  const result = await createPromise();
  console.log(result);
}

async function doNotAwaitPromise() {
  /**
   * If we miss using the 'await' keyword, the 
   * result will be a promise. We can resolve this promise
   * if we want to, but still, just saving a value from
   * an async function will result in a promise
   */
  const result = createPromise();
  console.log(result);
  /**
   * The promise is still there, unresolved, waiting
   * to be resolved (or rejected), like a receipt. If
   * we were to await the variable that contains the Promise
   * we would get our resolved result 
   */
  const resolvedResult = await result;
  console.log(resolvedResult);
}

/**
 * We can resolve a promise with 'Promise.resolve',
 * this function will return a promise that will get
 * resolved eventually
 */
function createPromise() {
  return Promise.resolve("I am resolved");
}

/**
 * And reject (deny) a promise with reject. This will
 * return a promise that will reject (fail) eventually
 */
async function rejectPromise() {
  return Promise.reject("Rejected");
}

/**
 * When catching errors we need the try/catch-block
 * everything that is supposed to happen that may 
 * create an error inside of try and the error
 * will get caught in the catch. Result will no resolve
 */
async function catchPromise() {
  try {
    const result = await rejectPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

awaitPromise();
doNotAwaitPromise();
catchPromise();


function regularThenWait() {
  const result = createPromise();
  result.then((resolvedResult) => {
    console.log(resolvedResult);
  })
}