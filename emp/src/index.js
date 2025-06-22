
(async function () {
    const data = await fetch('./src/data.json');
    const res = await data.json();

    console.log(res)
    let exmployees = res;
    let selectedEmployeeID = exmployees[0].id;
    let selectedEmployee = exmployees[0];

    const employeeList = document.querySelector('.empnameList')
    const employeeInfo = document.querySelector('.empnameNameInfo')


    const renderEmployee = () => {
        employeeList.innerHTML = "";
        exmployees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add("empnameList")

            if (parseInt(selectedEmployeeID, 10) === emp.id) {
                employee.classList.add("selected");
                selectedEmployee = emp
            }

          employee.setAttribute("id", emp.id)
          employee.innerHTML = `${emp.firstName} ${emp.lastName} <span>&#10060;</span>`

          employeeList.append(employee)
        })
    }
renderEmployee()
})();