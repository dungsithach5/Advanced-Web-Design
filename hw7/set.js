const employeeSalaries = new Map();
employeeSalaries.set('Alice', 5000);
employeeSalaries.set('Mark', 7000);
employeeSalaries.set('Tom', 4500);

console.log(`Mark's Salary: ${employeeSalaries.get('Mark')}`);

console.log(`Has Alice: ${employeeSalaries.has('Alice')}`); 

employeeSalaries.delete('Tom');

employeeSalaries.forEach((salary, employee) => {
    console.log(`${employee}: $${salary}`);
});
