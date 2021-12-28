let availableAmmount = 30000;
let input = prompt("Please input the ammount of money that you want to withdraw")

function atm() {

    if (input > availableAmmount) {
        alert(`Not enough money !`)


    } else {
        let moneyLeft =  availableAmmount - input
        alert(`You have withdrown ${input} and you have available ${moneyLeft}`  )

    }

}

atm();