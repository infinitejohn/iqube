const fetchData = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Data successfully fetched'); // Fulfill the promise with a value
      } else {
        reject(new Error('Error fetching data')); // Reject the promise with an error
      }
    }, 1000);
  });
  
  fetchData
    .then(response => alert(response))
    .catch(error => console.error(error));
  