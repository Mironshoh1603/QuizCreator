let tests = [
  {
    quiz_text: "hello tarjimasi",
    variants: [
      { value: "Salam", correct: true },
      { value: "NIma", correct: false },
      { value: "Salam1", correct: false },
    ],
  },
  {
    quiz_text: "book",
    variants: [
      { value: "Salam", correct: true },
      { value: "NIma", correct: false },
      { value: "Salam1", correct: false },
    ],
  },
];

let renderData = (data) => {
  if (!data) {
    data = tests;
  }
  let table = document.querySelector("table");
  data.map((test) => {
    let row = document.createElement("tr");
    let valeu = document.createElement("td");
    valeu.textContent = test.quiz_text;
    row.append(valeu);
    test.variants.map((variant) => {
      let varian = document.createElement("td");
      varian.textContent = variant.value;
      row.append(varian);
    });
    let editTd = document.createElement("td");
    let ind =
      tests.indexOf(test) == -1 ? tests.length - 1 : tests.indexOf(test);
    let deleteTd = document.createElement("td");
    let editBtn = document.createElement("i");
    editBtn.setAttribute("class", "fa-solid fa-pen-to-square");
    editBtn.setAttribute("id", ind);
    let deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("class", "fa-solid fa-trash");
    deleteBtn.setAttribute("id", ind);

    editTd.append(editBtn);
    deleteTd.append(deleteBtn);
    row.append(editTd);
    row.append(deleteTd);
    table.append(row);
  });
};
renderData();

let btn = document.querySelector(".btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    let savol = document.querySelector("#savol").value;
    let variants = [...document.querySelector(".variant").children];
    let answer = document.querySelector("#answer");
    //   console.log(answer.value, savol);
    let answers = [];
    for (let data of variants) {
      if (!data.value) {
        throw new Error("Ma'lumot bo'sh");
      }
      let obj = {
        value: data.value,
        correct: data.value == variants[answer.value].value,
      };
      answers.push(obj);
    }
    //   console.log(answers);
    tests.push({
      quiz_text: savol,
      variants: answers,
    });
    console.log(tests);
    renderData([
      {
        quiz_text: savol,
        variants: answers,
      },
    ]);
    document.querySelector("form").reset();
  } catch (error) {
    alert(error.message);
  }
});

let deleteFunc = (event, value) => {
  console.log("nima", event, value);
};

// let deleteBtns = document.querySelectorAll(".fa-trash");
// [...deleteBtns].map((dalele) => {
//   dalele.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

document.querySelector("table").addEventListener("click", (event) => {
  let element = event.target;
  console.log();
  if ([...event.target.classList].includes("fa-trash")) {
    let table = document.querySelector("table");
    // console.log(table.children);
    // console.log(+event.target.id + 1);
    for (let index = tests.length - 1; index >= 0; index--) {
      console.log(index);
      table.deleteRow(index + 1);
    }
    tests.splice(element.id, 1);
    renderData(tests);
  }
});
