// let obj = {
//     get propName() {
//       // getter, the code executed when obj.propName id getting
//     },
//     set propName(value) {
//       // setter, the code executed when obj.propName = value is setting
//     }
// };


const employee = {
    emp_Name : "",
    id_No : "",
}

// getting property
Object.defineProperty(employee, "getName", {
    get : function () {
        return this.emp_Name;
    }
});

// setting property
Object.defineProperty(employee, "changeName", {
    set : function (changeName) {
        this.emp_Name =  changName;
    }
});

const companyDetails = {
    companyName: '',
    address : '',
    workingHours : ''
}

// getting property
Object.defineProperty(companyDetails, "getcompanyName", {
    get : function () {
        return this.companyName;
    }
});

// setting property
Object.defineProperty(companyDetails, "changecompanyName", {
    set : function (value) {
        this.companyName = value;
    }
});

let office = Object.assign(employee,companyDetails)

office.getcompanyName = function(){
    console.log(`CompanyName : ${this.companyName}`);
}


let employee1 = office;
employee1.emp_Name = "James";
employee1.id_No = "FL01";
employee1.emp_Name = "Saran";
employee1.companyName = "ABC";
employee1.address = "Gandhinagar,Coimbatore.";
employee1.workingHours = 8;

console.log(employee1);
console.log(`Employee Name: ${employee1.emp_Name}`);
employee1.getcompanyName();
console.log(`Employee ID:  ${employee1.id_No}`);
console.log(`WorkingHours: ${employee1.workingHours}`);
console.log(`Address: ${employee1.address}`);
