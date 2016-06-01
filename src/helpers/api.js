export const getStockData = () => 
  fetch('/api/stocks', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());

export const postEmail = (email, google, apple) => 
  fetch('/api/email', {
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
  .then(response => response.json());