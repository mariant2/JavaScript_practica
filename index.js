
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'Edu'
},
{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'Silvia'
},
{
    age: 31,
    examScores: [],
    gender: 'female',
    name: 'Maria'
},
{
    age: 35,
    examScores: [],
    gender: 'male',
    name: 'Marcos'
}
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


//Como podéis ver, cada requisito tiene un número asignado. Cuando ejecutemos la aplicación, aparecerá el 
//listado completo de requisitos. El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. 
//Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. 
//En caso de que el usuario pulse el 0 o un número no contemplado, la aplicación terminará.


//1-Mostrar en formato de tabla todos los alumnos.
console.table(students)

//2- Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length);

//3- Mostrar por consola todos los nombres de los alumnos.
const namesArr = students.map(student => student.name)
namesArr.forEach(name => console.log(name))

//4- Eliminar el último alumno de la clase.
students.pop();

//5- Eliminar un alumno aleatoriamente de la clase.
let randomId = Math.floor(Math.random() * students.length);
students.splice(randomId, 1)

//6- Mostrar por consola todos los datos de los alumnos que son chicas.
students.forEach(femaleStudent => {
    if (femaleStudent['gender'] === 'female') {
        console.log(femaleStudent)
    }
});

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
let femaleGender = students.filter(student => student.gender === 'female');
let maleGender = students.filter(student => student.gender === 'male');

console.log(femaleGender)
console.log(maleGender)

//8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
console.log(students.every(gender => gender === 'female'))


//9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
function totalAdults(){ 
    const totalAdults = students.filter(student => student.age >= 20 && student.age <= 25)
    console.log(totalAdults[student].name)
    };


//10- Añadir un alumno nuevo con los siguientes datos:
//nombre aleatorio.
//edad aleatoria entre 20 y 50 años.
//género aleatorio.
//listado de calificaciones vacío.
//¡OJO!, el nombre y el género tienen que ir acordes.
let randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)]
                
let randomName = randomGender === 'female' ? availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];    
function randomInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};
let randomAge = randomInterval(20, 50);
students.push({age: randomAge, examScores: [], gender: randomGender, name: randomName});
console.table(students);


//11- Mostrar por consola el nombre de la persona más joven de la clase.
//¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
let studentAges = students.map(student => student.age)
let youngest = Math.min(...studentAges);
let youngestStudent = students[studentAges.indexOf(youngest)]
console.log(youngestStudent.name)


//12- Mostrar por consola la edad media de todos los alumnos de la clase.
let sumGrades = students.map(student => student.examScores)
let avgGrades = sumGrades / students.length
console.log(avgGrades)

//13- Mostrar por consola la edad media de las chicas de la clase.
let sumFemGrades = students.map(student => student.age).reduce((a,b) => a+b, 0)
let avgFemGrades = sumFemGrades / students.length
console.log(avgFemGrades)

//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
    }
students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10)));
console.table(students)

//15- Ordenar el array de alumnos alfabéticamente según su nombre.
function sortNames() {
    students.sort( (a, b) => (a.name > b.name) ? 1 : -1)
  }

