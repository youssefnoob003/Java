function play(choice)
        {
            let pc = Math.random();
            let user = '';
            let x = "";
            if (pc < 0.33) {x = "rock"; pc = 0;}
            else if (pc < 0.66) {x = "paper"; pc =1;}
            else {x = "scissors";pc = 2;}

            if (choice == 0) {user = "rock"}
            else if (choice == 1) {user = "paper"}
            else {user = "scissors";}
            if ((choice == 0 && pc == 2) || (choice == 1 && pc == 0) || (choice == 2 && pc == 1))
            {
                document.querySelector(".js-title").innerHTML = "you win";
            }
            else if ((choice == 2 && pc == 0) || (choice == 0 && pc == 1) || (choice == 1 && pc == 2))
            {
                document.querySelector(".js-title").innerHTML = "you lose";
            }
            else 
            {
                document.querySelector(".js-title").innerHTML = "tie";
            }

            document.querySelector(".res").innerHTML =
            `pc chose <img class = 'icon' src="${x}-emoji.png"> you chose <img class = 'icon' src="${user}-emoji.png">`
            
        }