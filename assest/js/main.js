let i=0;
let score = 0;
let flag ;
let timer = 60;
let timeOutFlag= false;
let TimerVal
const questions=[
    {id :1 ,question :'Declare a variable called username.',description:'<pre class="p-2">... username</pre>',option :['var','string','declre','char'],ans:'var'},
    {id :2 ,question :'Assign data of integer data type to the following variable.',description:'<pre class="p-2">firstNumber = ...</pre>',option :[2.14,"'8'",'"20"',80],ans:80},
    {id :3 ,question :'What is the expected output of the following code.',description:'<pre class="p-2">let x = 2 ; console.log(++x);</pre>',option :[2,3,4,'Syntax Error'],ans:3},
    {id :4 ,question :'What is the expected output of the following code.',description:'<pre class="p-2">let x = 2 ; console.log(x++);</pre>',option :[2,3,4,'Syntax Error'],ans:2},
    {id :5 ,question :'What is the expected output of the following code.',description:'<pre class="p-2">let x = 2 ; console.log((x++));</pre>',option :[2,3,4,'Syntax Error'],ans:2},
    {id :6 ,question :'Set an alert to show the sum of 2 variables.',description:`<pre class="p-2"> let x = 2, y = 5
    ...(x+y));<pre>`,option :['setAlert','console.alert','alert','No correct Ans'],ans:'alert'},
    {id :7 ,question :'What is the expected output of the following code.',description:`
    <pre class="p-2">var x = 2
    let x = 10
    console.log(x);</pre>`,option :[2,10,'Syntax Error','No correct Ans'],ans:'Syntax Error'},
    {id :8 ,question :'What is the expected output of the following code.',description:`<pre class="p-2"> var x = 2
    var x = 10
    console.log(x);</pre>`,option :[2,10,'Syntax Error','No correct Ans'],ans:10},
    {id :9 ,question :'Execute a function called calculateSum.',description:'',option :['calculateSum','calculateSum[]','calculateSum{}','calculateSum()'],ans:'calculateSum()'},
    {id :10 ,question :'Complete the following code to create a function that returns the sum of 2 parameters.',description:`<pre class="p-2">function calculateSum(x, y){
        ...
    }</pre>`,option :['return x+y','console.log(x+y)','alert(x+y)','No correct Ans'],ans:'return x+y'},


]



const showMessage = ()=>{
    Swal.fire({
        title: 'Time Out ',
        icon: 'info',
        html:
        'If you answer this question correctly, you will get only 2 points instead of 5',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
}
const setTimer = ()=>{
    timer = 60;
  TimerVal = setInterval(() => {
       timeOutFlag=false
       timer -- ;
       document.getElementById('timer').innerHTML=timer;
    //    console.log(timer)

       if(timer === 0){
        timeOutFlag = true;
        clearInterval(TimerVal)
        showMessage()
       }
        
    }, 1000);
}

const backBtn =()=>{

    document.getElementById('back').addEventListener('click',()=>{
        if( i != 1){
            i--;
            displayQuestion(i)
        }
    })

}
const findAns =(i)=>{
    const options = document.getElementsByTagName('li');
    let correctAns
    for(const option of options){
        if(option.innerText == questions[i].ans){
            correctAns = option
        }
    }
    return correctAns

}
const choosnOptionStyle= (option,options)=>{
    for(const ele of options){
        if (ele === option){
            ele.classList.add('choosen')
        }
        else{
            ele.classList.remove('choosen')
        }
    }

}


const chechedButton =(flag , option , correctOption)=>{
    
    console.log(correctOption)
    console.log(option)
    document.getElementById('check').addEventListener('click',()=>{
        
        if(document.getElementById('check').textContent === 'Check'){
           
            if (flag){
                option.style.backgroundColor='#28a745';
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Correct Answer',
                    showConfirmButton: false,
                    timer: 1500
                  })
                document.getElementById('check').textContent= 'Next';
            }else{
                console.log(correctOption)
                correctOption.style.backgroundColor='#28a745';
                option.style.backgroundColor='#dc3545';
                document.getElementById('check').textContent= 'Next';
                      Swal.fire({
                        // position: 'top-end',
                        icon: 'error',
                        text: 'Wrong Answer!',
                      })
                    
                
            }
        }
        else{
            i++;
           timeOutFlag? score += 2 : score += 5 ;
            document.getElementById('score').innerHTML=`Score : ${score}`;
            displayQuestion(i)
        }
     
    })

}
const checkAns =(i)=>{
    const options = document.getElementsByTagName('li');
    let correctAns= findAns(i); 
   
    for(const option of options){
        option.addEventListener('click',()=>{
            clearInterval(TimerVal)
            choosnOptionStyle(option,options)
            if (option === correctAns){
                correctAns=option;
                console.log('kkk');
                flag= true;

                chechedButton(flag,option,correctAns)
            
                // displayQuestion(i);
               
                
            }
            else{
                flag= false;
                console.log(correctAns)
                chechedButton(flag,option,correctAns)
            }
        })
               
            }
        }

const displayQuestion = (i)=>{
    if(i==10){
  window.location =`./congrate.html`

        return
    }
    setTimer();
    document.getElementById('Question').innerHTML=`
    <div class="quizeBody p-4  m-auto rounded">
                <div>
                    <div>
                        <div class="row p-2 rounded justify-content-around text-white bg-main">
                            <div class="col-9" >
                                <h4>Question number ${i+1} out of 10</h4>
                                <h5 id="score">Score : ${score}</h5>
                            </div>
                            <div class="timer col-2 pt-3">
                                <span class=" p-3 rounded bg-light text-center text-info" id="timer" >${timer}</span>
                            </div>
                        </div>
                        <div class="my-2">
                            <h5> ${questions[i].question}</h5>
                            <div class="bg-dark text-white ">
                                <h5>${questions[i].description}</h5>
                            </div>
                        </div>
                        <div>
                            <ul class="list-group list-unstyled">
                                <li class="  mt-3 p-2  rounded border " >${questions[i].option[0]}</li>
                                <li class=" mt-3 p-2 rounded border " >${questions[i].option[1]}</li>
                                <li class=" mt-3 p-2  rounded border " >${questions[i].option[2]}</li>
                                <li class="mt-3 p-2   rounded border" >${questions[i].option[3]}</li>
                              </ul>
                            
                        </div>
                        <div class="row mt-3">
                            <div class="col-6">
                                <button class="btn border w-100 text-primary fw-bold fs-5" id="back"><i class="fa fa-angle-left pe-2" aria-hidden="true"></i>Back</button>
                            </div>
                            
                            <div class="col-6">
                                <button class="btn border w-100 text-primary fw-bold fs-5" id="check">Check<i class="fa fa-check-double  ps-2" aria-hidden="true"></i></button>
                            </div>
                        </div>
                       
                    </div>
                </div>
    
            </div>
    `
  
    backBtn();
   checkAns(i);

}

displayQuestion(i);


        
    

  