const gameContainer= document.querySelector(".container")
let userResult = document.querySelector(".user_result img")
let cpuResult = document.querySelector(".cpu_result img")
let msgBox = document.querySelector(".msg_box")
let choiceImages = document.querySelectorAll(".choice_image")

//console.log(gameContainer,userResult,cpuResult,msgBox,choiceImages)

choiceImages.forEach((image,index)=>{
    image.addEventListener("click", (e)=>{
        image.classList.add("active");

        //loop to remove prev active otion
        choiceImages.forEach((image2,index2)=>{
            index !== index2 && image2.classList.remove("active");
        })

        gameContainer.classList.add("start");

        //adding time delay at the end 
        let time= setTimeout(()=>{

        gameContainer.classList.remove("start");
        //user selction on screen
        let imageSrc = e.target.querySelector("img").src;
        userResult.src=imageSrc;
        console.log(imageSrc);
        //cpu seletion on screen
        let randomNum= Math.floor(Math.random()*3);
        let optionImages=["images/rock.png","images/paper.png","images/scissors.png"];
        cpuResult.src= optionImages[randomNum];

        //Game
        let cpuValue = ["R","P","S"][randomNum];
        let userValue = ["R","P","S"][index];

        if (userValue === cpuValue){
            msgBox.textContent="Match Draw"
        }else{
            let userWin = true;
            if(userValue==="R"){
                userWin = cpuValue==="P"? false:true;
            }
            else if (userValue==="P"){
                userWin = cpuValue==="S"? false:true;
            }
            else if (userValue==="S"){
                userWin = cpuValue==="R"? false:true;
            }

            if (userWin==true){
                msgBox.textContent="User Won"
            }
            else{
                msgBox.textContent="Cpu Won"
            }
        }    
        },2500) //time delay bracket close
    })
});