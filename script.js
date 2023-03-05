
let students = [
  {
    name: "Maria",
    note1: 7,
    note2: 8
  },
  {
    name: "João",
    note1: 5,
    note2: 6
  },
  {
    name: "Felipe",
    note1: 10,
    note2: 9
  }
]

function calcNote(n1, n2) {
  let avarege = (n1 + n2) / 2
  return avarege
}

function renderNote(students) {
  let calcNoteStudent = calcNote(students.note1, students.note2)

  if (calcNoteStudent >= 7) {
    alert(`A media do aluno(a) ${students.name} foi de ${calcNoteStudent} \n Parabens ${students.name} vc passou`)
  } else {
    alert(`A media do aluno(a) ${students.name} foi de ${calcNoteStudent} \n Infelizmente ${students.name} vc não atingiu a média, tente novamente`)
  }

}

for (let index of students) {
  renderNote(index)
}