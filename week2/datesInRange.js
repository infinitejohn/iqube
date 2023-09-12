function getDatesInRange(startDate, endDate) {
    const dateArray = [];
    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);
  
    while (currentDate <= lastDate) {
      dateArray.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dateArray;
  }
  
  // Example inputs
  const startDate = "2023-09-01";
  const endDate = "2023-09-05";
  const result = getDatesInRange(startDate, endDate);
  console.log(result);
  