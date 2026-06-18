const sueldos = [500_000, 1_500_000, 750_000, 630_000];

let totalSueldos = 0;

for (let index = 0; index < sueldos.length; index++) {
    totalSueldos += sueldos[index];
};

console.log("Total sueldo empleados:", totalSueldos);