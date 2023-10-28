let i = 0;
let score = 0;
let ans_flag;
let timer = 60;
let timeOutFlag = false;
let TimerVal;
let userChoice;
let correctAns;
let userAnswers=[]




const questions = [
  {
    id: 1,
    question: "Declare a variable called username.",
    description: '<pre class="p-2">... username</pre>',
    option: ["var", "string", "declre", "char"],
    ans: "var",
  },
  {
    id: 2,
    question: "Assign data of integer data type to the following variable.",
    description: '<pre class="p-2">firstNumber = ...</pre>',
    option: [2.14, "'8'", '"20"', 80],
    ans: 80,
  },
  {
    id: 3,
    question: "What is the expected output of the following code.",
    description: '<pre class="p-2">let x = 2 ; console.log(++x);</pre>',
    option: [2, 3, 4, "Syntax Error"],
    ans: 3,
  },
  {
    id: 4,
    question: "What is the expected output of the following code.",
    description: '<pre class="p-2">let x = 2 ; console.log(x++);</pre>',
    option: [2, 3, 4, "Syntax Error"],
    ans: 2,
  },
  {
    id: 5,
    question: "What is the expected output of the following code.",
    description: '<pre class="p-2">let x = 2 ; console.log((x++));</pre>',
    option: [2, 3, 4, "Syntax Error"],
    ans: 2,
  },
  {
    id: 6,
    question: "Set an alert to show the sum of 2 variables.",
    description: `<pre class="p-2"> let x = 2, y = 5
    ...(x+y));<pre>`,
    option: ["setAlert", "console.alert", "alert", "No correct Ans"],
    ans: "alert",
  },
  {
    id: 7,
    question: "What is the expected output of the following code.",
    description: `
    <pre class="p-2">var x = 2
    let x = 10
    console.log(x);</pre>`,
    option: [2, 10, "Syntax Error", "No correct Ans"],
    ans: "Syntax Error",
  },
  {
    id: 8,
    question: "What is the expected output of the following code.",
    description: `<pre class="p-2"> var x = 2
    var x = 10
    console.log(x);</pre>`,
    option: [2, 10, "Syntax Error", "No correct Ans"],
    ans: 10,
  },
  {
    id: 9,
    question: "Execute a function called calculateSum.",
    description: "",
    option: [
      "calculateSum",
      "calculateSum[]",
      "calculateSum{}",
      "calculateSum()",
    ],
    ans: "calculateSum()",
  },
  {
    id: 10,
    question:
      "Complete the following code to create a function that returns the sum of 2 parameters.",
    description: `<pre class="p-2">function calculateSum(x, y){
        ...
    }</pre>`,
    option: ["return x+y", "console.log(x+y)", "alert(x+y)", "No correct Ans"],
    ans: "return x+y",
  },
];

const showCheckMsg = () => {
  Swal.fire({
    title: "Choose First ",
    icon: "info",
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
};
const showTimeMessage = () => {
  Swal.fire({
    title: "Time Out ",
    icon: "info",
    html: "If you answer this question correctly, you will get only 2 points instead of 5",
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
};
const setTimer = () => {
  timer = 60;
  TimerVal = setInterval(() => {
    timeOutFlag = false;
    timer--;
    document.getElementById("timer").innerHTML = timer;
    //    console.log(timer)

    if (timer === 0) {
      timeOutFlag = true;
      clearInterval(TimerVal);
      showTimeMessage();
    }
  }, 1000);
};

const mm = () => {
  const options = document.getElementsByTagName("li");
  let correctAns = findAns(i);
  for (const option of options) {
    if(option.innerText === userAnswers[i]){
        option.style.backgroundColor = "rgb(220, 53, 69)";
    }
    if (option === correctAns) {
      option.style.backgroundColor = "#28a745";
    }

  
  }
}
const chechedbtn=(btn)=>{

    if(btn.textContent === 'Check'){
        if(!userChoice){
            showCheckMsg();
        }
        questions[i].isAnwered = true;
        console.log('cheeeck');
        if(ans_flag){
            userChoice.style.backgroundColor = "#28a745";
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Correct Answer",
              showConfirmButton: false,
              timer: 1500,
            });
            document.getElementById("check").textContent = "Next";
            timeOutFlag  ? (score += 2) : (score += 5);

        }else {
            correctAns.style.backgroundColor = "#28a745";
            userChoice.style.backgroundColor = "#dc3545";
            document.getElementById("check").textContent = "Next";
            Swal.fire({
              icon: "error",
              text: "Wrong Answer!",
            });
          }
         
    }
    else{   ////// thats mean Next btn
        console.log('nexxxt');
        i++;

      if (questions[i].isAnwered === true) {
        console.log("mmmm");
        displayQuestion(i);
        document.getElementById("check").textContent = "Next";
        clearInterval(TimerVal);
        mm();
      } else {
        ans_flag = false;
        userChoice = null
        
        displayQuestion(i);
        document.getElementById("check").textContent = "Check";
        // displayQuestion(i);
       
        document.getElementById("score").innerHTML = `Score : ${score}`;
      }
    }
 
    
}
const backBtn = () => {
  console.log("mmmm");

  if (i != 0) {
    if(!userChoice){
        showCheckMsg();
        return
    }
    i--;
    displayQuestion(i);
    clearInterval(TimerVal);
    mm(); //set green color on correct ans

    document.getElementById("check").textContent = "Next";
  }

};
const findAns = (i) => {
  const options = document.getElementsByTagName("li");
  let correctAns;
  for (const option of options) {
    if (option.innerText == questions[i].ans) {
      correctAns = option;
    }
  }
  return correctAns;
};
const choosnOptionStyle = (option, options) => {
  for (const ele of options) {
    if (ele === option) {
      ele.classList.add("choosen");
    } else {
      ele.classList.remove("choosen");
    }
  }
};


const checkAns = (i,choice) => {
    clearInterval(TimerVal); 
   userChoice =choice;
   userAnswers.push(choice.innerText);
   console.log(userAnswers)
  const options = document.getElementsByTagName("li");
   correctAns = findAns(i);
  choosnOptionStyle(choice, options);
if (choice === correctAns) {
    correctAns = choice;
    ans_flag = true;
    

  } else {
    ans_flag = false;
   
  }
};


const displayQuestion = (i) => {
  if (i == 10) {
    window.location = `./congrate.html`;

    return;
  }
  setTimer();
  document.getElementById("Question").innerHTML = `
    <div class="quizeBody p-4  m-auto rounded">
                <div>
                    <div>
                        <div class="row p-2 rounded justify-content-around text-white bg-main">
                            <div class="col-9" >
                                <h5>Question number ${i + 1} out of 10</h5>
                                <h6 id="score">Score : ${score}</h6>
                            </div>
                            <div class="timer col-2 pt-3">
                                <span class=" p-3 rounded bg-light text-center text-info" id="timer" >${timer}</span>
                            </div>
                        </div>
                        <div class="my-2">
                            <h6> ${questions[i].question}</h6>
                            <div class="bg-dark text-white ">
                                <h5>${questions[i].description}</h5>
                            </div>
                        </div>
                        <div>
                            <ul class="list-group list-unstyled">
                                <li class="  p-1  rounded border " style="font-size:16px;" onclick ="checkAns(i,this)" >${
                                  questions[i].option[0]
                                }</li>
                                <li class=" mt-3 p-1 rounded border "  style="font-size:16px;" onclick ="checkAns(i,this)">${
                                  questions[i].option[1]
                                }</li>
                                <li class=" mt-3 p-1  rounded border "style="font-size:16px;" onclick ="checkAns(i,this)" >${
                                  questions[i].option[2]
                                }</li>
                                <li class="mt-3 p-1   rounded border" style="font-size:16px;" onclick ="checkAns(i,this)" >${
                                  questions[i].option[3]
                                }</li>
                              </ul>
                            
                        </div>
                        <div class="row mt-3">
                            <div class="col-6">
                                <button class="btn border w-100 text-primary fw-bold fs-6" id="back" onclick= "backBtn()"><i class="fa fa-angle-left pe-2" aria-hidden="true"  ></i>Back</button>
                            </div>
                            
                            <div class="col-6">
                                <button class="btn border w-100 text-primary fw-bold fs-6" id="check" onclick= "chechedbtn(this)" >Check<i class="fa fa-check-double  ps-2" aria-hidden="true"></i></button>
                            </div>
                        </div>
                       
                    </div>
                </div>
    
            </div>
    `;


};

displayQuestion(i);
