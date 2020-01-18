function rafAsync() {
  return new Promise(resolve => {
    requestAnimationFrame(resolve);
  });
}

function checkElement(selector) {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkElement(selector));
  } else {
    return Promise.resolve(true);
  }
}
checkElement('[aria-label="Timeline: Your Home Timeline"]').then(
  elementExists => {
    if (elementExists) {
      const element = document.querySelector(
        '[aria-label="Timeline: Your Home Timeline"]'
      );
      element.parentElement.removeChild(element);
    }
  }
);

