const students = [
  {
    name: "Sergio",
    nota1: 10,
    nota2: 6
  },
  {
    name: "Pablo" ,
    nota1: 3 ,
    nota2: 9 ,
  } ,
  {
    name: "Jussara" ,
    nota1: 10 ,
    nota2: 9 ,
  } ,
  {
    name: "Clóvis" ,
    nota1: 1 ,
    nota2: 6 ,
  } ,
  {
    name: "Bryan" ,
    nota1: 9 ,
    nota2: 7.5 ,
  } ,
]

function notaFinal (nota1, nota2) {
  return((nota1 + nota2) / 2)
}

let frase = []

function printNf(students) {

const average = notaFinal(students.nota1, students.nota2)

if (average >= 7) {
  frase = `\nParabéns! Você foi aprovado!`
} else {
  frase = `\nInfelizmente, você foi reprovado! Estude mais na próxima!`
}
return `A media do(a) aluno(a) ${students.name} foi de ${average}! ${frase} `
}



for (student of students) {
  let message = printNf(student)
  alert(message)
}