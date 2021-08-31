    // // Chp 35-38


    // Q1
    var date = () => {
        var date = new Date()
        return date
    }
    document.write(date())

    // Q2

    var firstName = prompt("Enter your first name", "")
    var lastName = prompt("Enter your last  name", "")

    const greet = (firstName, lastName) => {
        return ` Hello dear ${firstName} ${lastName}`
    }
    document.write(greet(firstName, lastName))


    // Q3

    var num1 = +prompt("enter the first number ")
    var num2 = +prompt("enter the second number ")

    const add = (num1, num2) => {
        return num1 + num2;
    }
    document.write(add(num1, num2))




    // Q4

    var number1 = prompt("enter the first number ", 3)
    var operator = prompt("enter the oprerater ", "+")
    var number2 = prompt("enter the second number ", 0)
    const calculator = (number1, number2, operator) => {
        var operant = `${number1}${operator}${number2} `
        return eval(operant);
    }
    document.write(calculator(number1, number2, operator))

    // Q5
    var num = +prompt("enter the number for make the square ")
    const square = num => {
        return num ** 2
    }
    document.write(`Square or ${num} is ${square(num)} `)




    // Q6
    var fecto = +prompt("Enter the number to the fectorial oof the number");
    var res = 1;
    for (var i = 1; i <= fecto; i++) {
        res = res * i;
        document.write(res, "<br>")
    }

    // Q7
    //   out of understanding 





    // Q8

    const hypot = (base, per) => {
        const sq = (base, per) => {
            base1 = base ** 2;
            per1 = per ** 2;
        }
        sq(base, per)
        return Math.sqrt((base1 + per1))
    }
    document.write(`the square hypotenuse ${(hypot(6, 6)).toFixed(2)}`)

    // Q9

    var width = 4;
    var height = 5;
    const rectangle = (width, height) => {
        return width * height;
    }
    document.write(`area of rectangle by passsing the value in the function is  ${rectangle(4, 7)} <br/> `)
    document.write(`area of rectangle by passsing the variables is the function is  ${rectangle(width, height)}`)

    console.log(rectangle(3, 6))





    // Q10

    var word = prompt("Enter the the palindrome word ", "").toLowerCase()

    const palindrome = word => {
        var reWord = word.toLowerCase().split("").reverse().join("")

        if (word == "")
            alert(`please enter the palindrome word to check`)

        else if (word == reWord)
            alert(`this is the palindrome word, ${word}`)

        else
            alert(`this is not the palindrome word, ${word}`)

    }
    palindrome(word)




    //  Q11

    var lowerCase = "the quick broen fox"

    const sentenceCase = lowerCase => {
        var temp = "";

        for (var i = 0; i < lowerCase.length; i++) {

            if (lowerCase[i] == " ") {
                temp += lowerCase[i]
                ++i
                temp += lowerCase[i].toUpperCase()
            }
            else {
                temp += lowerCase[i]
            }

            // temp += lowerCase[i].toUpperCase();

        }
        console.log(temp)
    }
    sentenceCase(lowerCase)





    // Q 12

    let text = prompt("Enter tje text to find t he largest number of text", ":")

    text = text.split(" ")
    const largeWord = (text) => {

        let temp = text[0];
        for (var i = 1; i < text.length; i++) {
            if (text[i].length > temp.length) {
                temp = text[i]
            }
        }
        console.log(temp)
    }

    largeWord(text)


    // Q 13


    let text1 = prompt("Enter the text to  ", "")
    let text2 = prompt("Enter the letter to find the times it come  ", "")

    text1 = text1.split("")
    const countLetter = (text1, text2) => {

        let temp = 0

        for (var i = 0; i < text1.length; i++) {
            if (text2 == text1[i]) {
                temp++;
            }
        }
        console.log(temp)
    }

    countLetter(text1, text2)








    // Q 14. The Geometrizer
    //   out of understanding













