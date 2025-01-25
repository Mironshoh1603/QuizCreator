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
