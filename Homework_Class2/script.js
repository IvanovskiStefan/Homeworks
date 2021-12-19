

let input = prompt("Please enter your birthyear to find out what is your Chinese zodiac sign !");
let parsedInput = parseInt(input)
let parsedFloat = parseFloat(input)
let calculationForSing = (input-4)%12;

if (!Number.isNaN(parsedInput)) {

    if (calculationForSing === 0) {
        alert("Your Chinese zodiac sign is Rat")

    } else if (calculationForSing === 1) {

        alert("Your Chinese zodiac sign is Oox")

    } else if (calculationForSing === 2) {

        alert("Your Chinese zodiac sign is Tiger")
    }
    else if (calculationForSing === 3) {

        alert("Your Chinese zodiac sign is Rabit")
    }
    else if (calculationForSing === 4) {

        alert("Your Chinese zodiac sign is Dragon")

    }

    else if (calculationForSing === 5) {

        alert("Your Chinese zodiac sign is Snake")
    }
    else if (calculationForSing === 6) {

        alert("Your Chinese zodiac sign is Horse")
    }

    else if (calculationForSing === 7) {

        alert("Your Chinese zodiac sign is Goat")
    }
    else if (calculationForSing === 8) {

        alert("Your Chinese zodiac sign is Monkey")
    }

    else if (calculationForSing === 9) {

        alert("Your Chinese zodiac sign is Rooster")
    }
    else if (calculationForSing === 10) {

        alert("Your Chinese zodiac sign is Dog")
    }

    else if (calculationForSing === 11) {

        alert("Your Chinese zodiac sign is Pig")
    }
}


else {

    alert("Please enter a valid number")
}