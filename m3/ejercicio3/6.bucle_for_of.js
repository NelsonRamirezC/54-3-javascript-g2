const sueldos = [500_000, 1_500_000, 750_000, 630_000];

let totalSueldos = 0;

for (const sueldo of sueldos) {
    totalSueldos += sueldo;
}


console.log("Total sueldo empleados:", totalSueldos);