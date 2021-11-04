const createLoader = (onSuccess, onError) => () => {
  return fetch('https://24.javascript.pages.academy/kekstagram/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
  )
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} - ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((pictures) => {
    onSuccess(pictures);
  })
  .catch((error) => {
    onError(error);
  });
};



export {createLoader};


