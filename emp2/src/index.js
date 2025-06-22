(async function () {

    // fetching of employee 
    const data = await fetch('./src/data.json');
    const res = await data.json()

    // console.log(res)
    let employee = res ; 
    let selectEmpId = employee[0].id;
    let selectEmp = employee[0];

    const empList = document.querySelector(".empNameList");
    const empInfo = document.querySelector("empNameInfo");

    //add employee logic

    //select employee emp

    const renderEmp = () => {
        empList.innerHTML = "";
        employee.forEach((emp)=>{
            const employee = document.createElement("span");
            employee.classList.add("empnameitem");

            if(parseInt(selectEmpId, 10)=== emp.id){
                employee.classList.add("selected");
                selectEmp = emp;
            }

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <span>&#10060;</span> `

            empList.append(employee)
        })
    };

    renderEmp()
    
})()