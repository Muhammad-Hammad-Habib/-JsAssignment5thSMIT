    // chp 31-34

    // Q 1
    var month = ["january", "February", "march ", "april", " may ", "june", "july", " august ", "september", "octuber ", "November", "december"]
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var date = new Date()

    document.write(date)


    // Q 2

    document.write("current month is", month[(date.getMonth())])

    // Q 3

    document.write("today is", day[date.getDay()])



    // Q4

    if ((day[date.getDay()]) == "sat" || (day[date.getDay()]) == "sun") {
        document.write("its a funny day")
    }
    else
        document.write("its a working day")








    // Q5

    if ((date.getDate()) <= 15)
        document.write("First fifteen days of the month")
    if ((date.getDate()) >= 16)
        document.write("last fifteen days of the month")


    // Q6
    //  out of understanding

    // Q7


    if ((date.getHours()) <= 12)
        document.write("Its AM")
    else
        document.write("Its Pm")



    // Q8

    var laterDate = new Date(2020, 11, 31)
    console.log(laterDate)



    // Q9
    // out of understanding







    //  Q10

    var findSec = new Date(2015, 11, 5)
    var currentTime = new Date(2015, 0, 1)
    var diff = (((findSec.getTime()) - currentTime.getTime()) / (1000 * 60))
    document.write("On reference date ", findSec, "<br/> ", diff, " seconds had passed since beginning  ")




    // Q11

    var Chours = new Date()
    var hours = new Date()
    hours.setHours(hours.getHours() - 1)

    document.write("current date: ", Chours, " <br> 1 hour ago , it was  ", hours)


    // Q 12
    var cYear = new Date()
    cYear.setFullYear(cYear.getFullYear() - 100)
    alert(cYear)



    // Q13

    var Year = new Date()
    var takebirthYear = +prompt("Enter the birth year", 1999)
    var bYear = new Date().setFullYear(takebirthYear)
    document.write(`your age is ${Math.floor((Year - bYear) / (1000 * 60 * 60 * 24 * 31 * 12))} <br /> your birth year is ${takebirthYear}`)
















