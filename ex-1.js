function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า

  for (let i = 0; i < customers.length; i++) {
    for (let j = 0; j < customers.length; j++) {
      if (customers[j] > customers[j + 1]) {
        let cat = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = cat;
        console.log(customers);
      }
    }
  }
  return customers;
}

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
sortCustomerName(customers);
console.log("answer:", customers);
// ตอบคำถามตรงนี้จ้า
// O(n^2) since it have loop inside a loop
