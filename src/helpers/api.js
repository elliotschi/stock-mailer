export const getStockData = ( => {
  fetch('/api/stocks', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
};

export const submitEmail = (email, google, apple) => {
  fetch('/api/stocks', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      google,
      apple
    })
  })
  .then(response => response.json())
};