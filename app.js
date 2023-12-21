let time = 10;
//let countdownhtml = document.getElementById("countdown").innerHTML;


// document.getElementById("Stbtn").addEventListener("click", () => {
//   if(time > 0){
//     function tcountdown() {
//       //let countdownhtml = document.getElementById("countdown").innerText;
//       time --;
//       document.getElementById("countdown").innerText = time;
//       //countdownhtml = time;
//       alert("test")  
//       clearTimeout(myTimeout)
//     }
//     const myTimeout = setTimeout(tcountdown, 1000);
//   }
// })


let compoptions = ["rock","paper","scissors"]
let humanwins = 0;
let compwins = 0;

document.getElementById("Stbtn").addEventListener("click", () => {
  count = setInterval(function countdown() {
    time --;
    document.getElementById("countdown").innerHTML = time;
    if(time <= 0){
      clearInterval(count);
      time = 10;
      document.getElementById("countdown").innerHTML = time;
    }else{
      //computer
      let comp = Math.floor(Math.random() * 3);
      let computerChoice = compoptions[comp]

      //human
      let humchoise = document.querySelectorAll(".choice");
      humchoise.forEach((button) => {
        button.addEventListener("click", (e) => {
          let hum = e.target.id;
          console.log(hum)

          if(computerChoice == "rock" && hum == "scissors"){
            compwins ++;
            document.getElementById("computer-score").innerHTML = compwins;
            alert("Computer won!")
          }else if(computerChoice == "paper" && hum == "rock"){
            compwins ++;
            document.getElementById("computer-score").innerHTML = compwins;
            alert("Computer won!")
          }else if(computerChoice == "scissors" && hum == "paper"){
            compwins ++;
            document.getElementById("computer-score").innerHTML = compwins;
            alert("Computer won!")
          }else if(computerChoice == "rock" && hum == "paper"){
            humanwins ++;
            document.getElementById("computer-score").innerHTML = humanwins;
            alert("Human won!")
          }else if(computerChoice == "paper" && hum == "rock"){
            humanwins ++;
            document.getElementById("computer-score").innerHTML = humanwins;
            alert("Human won!")
          }else if(computerChoice == "scissors" && hum == "rock"){
            humanwins ++;
            document.getElementById("computer-score").innerHTML = humanwins;
            alert("Human won!")
          }
        })
      })
    }
  }, 1000)
})