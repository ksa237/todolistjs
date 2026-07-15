
/*const order = { id: 1, status: 'pending' };
const orderDraft = order;


orderDraft.status = 'shipped';


console.log(order.status); // Что выведет?
console.log(orderDraft.status); // Что выведет?*/

const monthlySalaries = [5000, 7000, 10000];

function addBonus(salaries) {
  salaries[0] = salaries[0] + 500;
}

addBonus(monthlySalaries);

console.log(monthlySalaries); // [5500, 7000, 10000]