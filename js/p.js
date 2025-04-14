const phases = document.querySelectorAll(".phase");
phases.forEach((phase) => {
  phase.addEventListener("click", () => {
    phase.classList.toggle("active");
  });
});

/*--------------------------- */

tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*-------------------------*/
document.getElementById("whatsappLink").addEventListener("click", function () {
  window.open(
    "https://api.whatsapp.com/send?phone=+905518976778&text=السلام عليكم يسرني ان استفسر عن التسجيل في منصتكم...",
    "_blank"
  );
});
/*-------------------------*/
let data = document.querySelectorAll(".data input");
// let data2=document.querySelectorAll('.data select')
// console.log(data2.value)

function checkData() {
  console.log(data[0].value);

  window.open(
    `https://api.whatsapp.com/send?phone=+905518976778&text=
    السلام عليكم ورحمة الله أريد التسجيل في مؤسسة المقرئ في برنامج:(${data[1].value})
    عدد الساعات في الأسبوع:(${data[2].value})
    اسمي الثلاثي :(${data[0].value})

    
    
    `,
    "_blank"
  );
}
/*--------------------------------- */
const gQuestions = document.querySelectorAll(".g-question");
gQuestions.forEach((gQuestion) => {
  gQuestion.addEventListener("click", () => {
    gQuestion.classList.toggle("active");
  });
});
/*----------------------------------------------*/
document.querySelectorAll(".certificates-card img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});
document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
