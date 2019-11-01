
//****************************************************************//
    // This comes David's bonus exercises -- MEDIUM DIFFICULTY //

    // https://java.codeup.com/extra-exercises/javascript/objects/
//****************************************************************//

var salesReport = {
    title: "Monthly Sales Report",
    date: "03/17/2015",
    office: "Codeup",
    employees: [
        {
            employeeNumber: 1,
            firstName: "Jane",
            lastName: "Janeway",
            salesUnit: 3
        },
        {
            employeeNumber: 3,
            firstName: "Tricia",
            lastName: "Triciason",
            salesUnit: 5
        },
        {
            employeeNumber: 4,
            firstName: "Jeanette",
            lastName: "Jeanson",
            salesUnit: 4
        },
        {
            employeeNumber: 5,
            firstName: "Charles Emmerson III",
            lastName: "Winchester",
            salesUnit: 2
        },
        {
            employeeNumber: 6,
            firstName: "Chet",
            lastName: "Chedderson",
            salesUnit: 8
        },
        {
            employeeNumber: 7,
            firstName: "Chaiam",
            lastName: "Chaiamson",
            salesUnit: 12
        },
        {
            employeeNumber: 8,
            firstName: "Dale",
            lastName: "Dalesinger",
            salesUnit: 1
        },
        {
            employeeNumber: 9,
            firstName: "Zig",
            lastName: "Ziglar",
            salesUnit: 50
        },
        {
            employeeNumber: 10,
            firstName: "Henry",
            lastName: "Kissinger",
            salesUnit: 1
        },
        {
            employeeNumber: 11,
            firstName: "Arthur Herbert",
            lastName: "Fonzarelli",
            salesUnit: 23
        },
        {
            employeeNumber: 12,
            firstName: "Betty",
            lastName: "Boop",
            salesUnit: 67
        }
    ],
    getEmployeeCount: function () {
        console.log(this.employees.length + " is the number of employees");
    },


    getTotalSales: function () {
        var total = 0;
        for (var i = 0; i < this.employees.length; i++) {
            total += this.employees[i].salesUnit;

        }
        console.log(total);
    },
    getAverageSalesPerEmployee: function () {
        var averageSales;
        var total = 0;
        this.employees.forEach(function (employee,index) {
            total += salesReport.employees[index].salesUnit;
        });
        averageSales = (total / 11);
        console.log(averageSales);
    }
};

//********************************************//
// This is from edabit: (simple)
// https://edabit.com/challenge/i6YqzHcSiPiEQKjeX //
//********************************************//

function maximumScore(tileHand) {
    var total = 0;
    for (var i = 0; i< tileHand.length; i++) {
        total += tileHand[i].score;
    }
    return total;
}

