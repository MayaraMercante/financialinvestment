document.addEventListener("DOMContentLoaded", function () {

  /* menu */
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  /* register */
  const accountForm = document.getElementById("accountForm");
  if (accountForm) {
    accountForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const errorMsg = document.getElementById("errorMsg");

      errorMsg.textContent = "";

      if (fullname.length < 3) {
        errorMsg.textContent = "Full Name must be at least 3 characters.";
        return;
      }

      if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        return;
      }

      // localStorage // 
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

    
      window.location.href = "info.html";
    });
  }

  /* info */
  const infoForm = document.getElementById("infoForm");
  if (infoForm) {
    infoForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const salary = document.getElementById("salary").value;
      const fixedExpenses = document.getElementById("fixedExpenses").value;
      const savings = document.getElementById("savings").value;
      const investments = document.getElementById("investments").value;
      const debts = document.getElementById("debts").value;

      localStorage.setItem("salary", salary);
      localStorage.setItem("fixedExpenses", fixedExpenses);
      localStorage.setItem("savings", savings);
      localStorage.setItem("investments", investments);
      localStorage.setItem("debts", debts);

    
      window.location.href = "results.html";
    });
  }

  /* results */
  const ctx = document.getElementById("myChart");
  if (ctx) {

    const salary = Number(localStorage.getItem("salary")) || 0;
    const fixedExpenses = Number(localStorage.getItem("fixedExpenses")) || 0;
    const savings = Number(localStorage.getItem("savings")) || 0;
    const investments = Number(localStorage.getItem("investments")) || 0;
    const debts = Number(localStorage.getItem("debts")) || 0;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Income', 'Fixed Expenses', 'Savings', 'Investments', 'Debts'],
        datasets: [{
          label: 'Financial Overview',
          data: [salary, fixedExpenses, savings, investments, debts],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    const tipElement = document.getElementById("financialTip");

    if (tipElement && salary > 0) {
      const savingsPercent = (savings / salary) * 100;
      const expensesPercent = (fixedExpenses / salary) * 100;
      const debtPercent = (debts / salary) * 100;

      let message = "";
      let color = "";

      if (savingsPercent >= 20) {
        message = "Excellent! You are saving more than 20% of your income.";
        color = "green";
      } else if (debtPercent > 30) {
        message = "Warning! Your debts are above 30% of your income.";
        color = "red";
      } else if (expensesPercent > 60) {
        message = "Your fixed expenses are very high.";
        color = "orange";
      } else if (savingsPercent < 10) {
        message = "You are saving less than 10%.";
        color = "orange";
      } else {
        message = "Your financial balance is stable.";
        color = "blue";
      }

      tipElement.textContent = message;
      tipElement.style.color = color;
    }
  }

});
