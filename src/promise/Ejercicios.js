export function delay(time, resolve) {
    window.setTimeout(null, time);
    resolve = new Promise((resolve) => {
      resolve("Hello after 2s")
    });
    delay(window.setTimeout, string).then((resolve) => {
      console.log(resolve);
    })
  }