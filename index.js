// অভিভাবক নোড থেকে inner text পেতে এবং সংখ্যায় রূপান্তর করার ফাংশন
function getInnerTextIntoNum(id) {
  let getText = document.getElementById(id);
  let text = getText.innerText;
  let numText = parseInt(text);
  return numText;
}

// ক্লাস লিস্ট খুঁজে পেতে এবং একটি অ্যারে হিসেবে পাওয়ার ফাংশন
function findingAllClasses(cls) {
  let className = document.querySelectorAll(cls);
  let texts = [];
  for (let cls of className) {
    let text = cls.innerText;
    texts.push(text);
  }
  return texts;
}

// লাভ আইকন ফাংশনালিটি
let loveIcon = document.querySelectorAll(".loveicon");
for (let icon of loveIcon) {
  icon.addEventListener("click", function () {
    let box = document.getElementById("heart_box");
    let heart = getInnerTextIntoNum("heart_text");
    let newText = heart + 1;
    box.children[0].innerText = newText;
  });
}

// কপি বাটন ফাংশনালিটি
let copyBtns = document.querySelectorAll(".copy_btn");
let numbers = findingAllClasses(".service_num");
copyBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let copyBox = getInnerTextIntoNum("copy_box");
    let newText = copyBox + 1 + " " + "copy";
    document.getElementById("copy_box").children[0].innerText = newText;
    let copyNum = numbers[index];
    navigator.clipboard.writeText(copyNum);
    alert("হটলাইন নাম্বার সফলভাবে কপি করা হয়েছে 😊");
  });
});

// কল বাটন ফাংশনালিটি
let callBtn = document.querySelectorAll(".call_btn");
let serviceName = findingAllClasses(".service_name");
let number = findingAllClasses(".service_num");
callBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let textNum = getInnerTextIntoNum("coin_box");
    if (textNum <= 0) {
      alert("দুঃখিত! আপনি আপনার লিমিট শেষ করেছেন 😔");
      return;
    }
    let name = serviceName[index];
    let num = number[index];
    alert("📞 ফোন করা হচ্ছে " + name + " " + num + "....");
    let newValue = textNum - 20;
    if (newValue < 0) newValue = 0;
    document.getElementById("coin_box").children[0].innerText = newValue;

    let date = new Date().toLocaleTimeString();
    console.log(name, num, date);

    let historyList = document.getElementById("history_list");
    let newChild = document.createElement("div");
    newChild.innerHTML = `<div class = "flex shadow-sm  p-3 ">
     <div class=" w-[60%]">
              <h1 class="text-sm mb-1">${name}</h1>
              <p class="text-sm">${num}</p>
            </div>
            <div class="time w-[40%]  ">
              <p class="text-sm">${date}</p>
            </div></div>`;
    historyList.appendChild(newChild);

    let clearBtn = document.getElementById("clear_btn");
    clearBtn.addEventListener("click", function () {
      document.getElementById("history_list").innerHTML = "";
      newChild.style.display = "block";
    });
  });
});