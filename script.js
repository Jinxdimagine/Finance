let IncomeList=document.getElementById("IncomeList");
let ExpensesList=document.getElementById("ExpensesList");
document.getElementById("IncomeButton").addEventListener("click",function() {
   let li=document.createElement("li");
   li.textContent="Najem";
   IncomeList.appendChild(li);
});

document.getElementById("ExpensesButton").addEventListener("click", function() {
    let li=document.createElement("li");
    li.textContent="Mobil";
    ExpensesList.appendChild(li);
});
