/*
let salary = [22,34,12,23,56,90];
let averageSalary = 20
function getResult(arr, func) {
    let array = [];
    for(let i = 0; i < arr.length; i++) {
        let value = func(arr[i]);
        array.push(value);
    }
    return array;
}
function calculate(salary) {
    return salary-averageSalary;
}

let report = getResult(salary, calculate)
console.log(report);
let ages = [10,14,25,34,87];
function checkAge(arr,func) {
 let array = [];
 arr.forEach((a) => {
    let value = func(a)
    array.push(value);

 })
 return array;

}
function compareAge(ages) {
  return 18 - ages
}
let result = checkAge(ages, compareAge);
console.log(result);
 let a = 3;
 b=a;
 console.log(a == b);
 a = 7;
 console.log(a == b);

let answer = 0;
let displayAnswer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
function lookChange(value) {
    console.log(typeof num1.value)
    console.log(typeof num2);
switch(value.value) {
    
    case "addition":
    answer = parseFloat(num1.value) + parseFloat(num2.value);
    break;
    case "subtraction":
        answer = parseFloat(num1.value)-parseFloat(num2.value);
    break;
    case "multiplication": 
    answer = num1.value * num2.value;
    break;
    case "division":
    answer = num1.value / num2.value
}
displayAnswer.innerHTML = `answer is ${answer}`;
}

let display = document.getElementById("answer");
increment = function() {
    let counter = 0;
     function changeBy(val) {
       counter += val;
    }
    return {
        inc: function() {
            changeBy(1);
            display.innerHTML = counter;
        },
        dec: function() {
            changeBy(-1);
            display.innerHTML = counter;
        },
        reset: function() {
            return counter;
        }
    }

   
}();
var x;
let y;
console.log(x);
console.log(y);
x = 1;
y = 2;

// object constructor //
function Person(name,age,address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.checkAge = function() {
        if(age > 14) {
            return age
        }
    }
}
let person1 = new Person('bigyan', 15 ,"campsie");
let poerson2 = new Person('pratik', 13, "ashfield")

console.log(person1.checkAge());

let value = document.getElementById("answer");
count = function() {
 let counter = 0;
 function changeBy(val) {
    counter += val;
 }
 return {
    inc: function() {
        changeBy(1);
        value.innerHTML = counter;

    },
    dec: function() {
        changeBy(-1);
        value.innerHTML = counter;
    },
    reset: function() {
        counter = 0;
        value.innerHTML = counter;
    }
 }
}()
callMe = function() {
    console.log("hello wrodl")
}()

let posts = [
    {title: "one", body: "hello one"},
    {title: "two", body: "hello two"}
]
function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`
      })
      document.getElementById("answer").innerHTML = output;
    }, 1000)
}

function createPosts(post, callback) {
    setTimeout(() => {
       posts.push(post);
       callback() 
       output = `<li>${post.title}`
    },2000)
}
createPosts({title: "three", body:"hello three"}, getPosts);
let p = new Promise((resolve, reject) => {
    let a = 2;
    if(a == 2) {
        resolve("success")
    }
    else {
        reject("reject")
    }
})
p.then((msg) => {
    console.log(`this is a ${msg}`)
}).catch((msg) => {
    console.log(`this is  a ${msg}`)
})

function userStatus() {
    return new Promise((resolve,reject) => {
        if()
    })
}

console.log("hello world")
let p = new Promise((resolve,reject)=> {
    let a = 2;
    if(a!== 2) {
        resolve(func1())
    }
    else 
    reject(func2())
})
p.then((msg) => console.log(msg))
p.catch((msg) => console.log(msg));
function func1() {
    return "hello world"
}
function func2() {
    return "error"
}

// OOP //
function CheckAge(array, newArray) {
   this.array = array;
   this.newArray = [];
   this.check  = function() {
    if(array >= 18) {
        this.newArray.push(array);
        return newArray;
    }
   }
}
let func1 = new CheckAge([20,14,12,30],[])
console.log(func1.check());

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running) 
        throw new Error("stopwatch already started");
        running = true;
        startTime = new Date();
    };
    this.end = function() {
        if(!running)
        throw new Error("stopwatch already paused");
        running = false;
        endTime = new Date();
        const sec = (endTime.getTime() - startTime.getTime())/1000;
        duration += sec;
    }; 
    this.reset = function() {
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function() {return duration; }
    })

}
let sw = new Stopwatch();

let name = document.getElementById("text");
function Checkdata(name) {
console.log(name)
}
Checkdata(name.value)

let table = document.querySelector("table");
let winner = document.getElementById("winner");
let tableDatas = document.querySelectorAll("td");
let arrays = Array.from(tableDatas);
let currentPlayer = "X";
let player1 = 0;
let check;
let player2 = 0;
let gameOver = false;
controlGame();
function controlGame() {
    tableDatas.forEach((data) => {
        data.addEventListener("click", (e)=> {
            if(e.currentTarget.innerHTML != "") return;
            if(check) {
               console.log("bingo")
            }
                
            currentPlayer = currentPlayer == "X"? "O" : "X";
            e.currentTarget.innerHTML = currentPlayer;

        })
    })
}


 
function checkWin() {
    winPossibility.forEach((win) => {
         check = win.every(idx => tableDatas[idx].innerHTML == currentPlayer) 
         if(check) {

         }
           
    })
}
       
*/
let tableData = document.querySelectorAll("td");
let player = "X";
let running = true;
let count = 0;
let winningPage = document.getElementById("winner");
let state = document.getElementById("state");
let btn = document.querySelector("button");

let winPossibility = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
tableData.forEach((data) => {
    data.style.width = "20px";
    data.style.height = "20px"
})
init();
function init() {
switchCases()
winningCase()
}
function switchCases() {
    tableData.forEach((data) => {
        data.addEventListener("click", (e)=> {
            if(data.innerHTML.trim() != "") return
            player = player == "X"? "O" : "X";
            e.currentTarget.innerHTML = player;
        })
    })

}
function winningCase() {
    tableData.forEach((data) => {
    data.addEventListener("click", (e) => {
    
    count += 1;
    console.log(count);
    winPossibility.forEach((win) => {
        let check = win.every((idx) => tableData[idx].innerHTML == player)
        if(check) {
           
           showWin();
        }
        else if(count == 9) {
            draw()
        }
        
       

        
    })
})
    })
}
function showWin() {
    count = 0;
tableData.forEach((data) => {
    data.innerHTML = "";
})
 winner.style.visibility = "visible";
 state.innerHTML = `${player}'s WINS`
 btn.addEventListener("click", ()=> {
    winner.style.visibility = "hidden"
    
   })


}
function draw() {
    count  = 0;
    tableData.forEach((data) => {
        data.innerHTML = "";
    })
     winner.style.visibility = "visible";
     state.innerHTML = `IT'S A DRAW`
     btn.addEventListener("click", ()=> {
        winner.style.visibility = "hidden"
        
       })
}
