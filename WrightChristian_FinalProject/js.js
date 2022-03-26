//This Javascript file will control the actions of the hotel applicaiton

//This function will gather the data from the main application and provide the information
function GetData(){

    //Gather the data
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("useremail").value;
    let start = new Date( document.getElementById("checkInDate").value);
    let end = new Date( document.getElementById("checkOutDate").value);
    var travelPlans = document.getElementById("travelPlans");

    //Create const variable to hold the spans to update
    const namePrint = document.getElementById("repeatName");
    const startPrint = document.getElementById("repeatStart");
    const endPrting = document.getElementById("repeatEnd");

    //Update the name to be displayed in the applciation
    namePrint.textContent = userName;
    startPrint.textContent = start;
    endPrting.textContent = end;


    //Make travel plans visible
    travelPlans.style.visibility = "visible";


    //Calulate the milisec. in a day
    const oneDay = 1000 * 60 * 60 *24;

    //Calculate the time difference
    const timeDiff = end.getTime() - start.getTime();

    //Find the difference between the two dates
    const totalDays =  Math.round(timeDiff / oneDay);

    console.log(totalDays + " days")

    //Update the hotel recommendation based on length of stay
    if(totalDays < 5){

        var totalCost = totalDays * 130.39;

        document.getElementById("hotelName").textContent = "Paséa Hotel & Spa"
        document.getElementById("nightPrice").textContent = "$130.39";
        document.getElementById("grandTotal").textContent = "$"+ totalCost;
    } else if(totalDays < 15){

        var totalCost = totalDays * 163.39;

        document.getElementById("hotelName").textContent = "Huntington Hotel"
        document.getElementById("nightPrice").textContent = "$163.39";
        document.getElementById("grandTotal").textContent = "$"+ totalCost;
    } else if(totalDays > 15){

        var totalCost = totalDays * 256.39;

        document.getElementById("hotelName").textContent = "The Waterfront Beach Resort"
        document.getElementById("nightPrice").textContent = "$256.39";
        document.getElementById("grandTotal").textContent = "$"+ totalCost;
    }



}
