
const read=require('readline').Interface({//takes the user input
    input:process.stdin,
    output:process.stdout
});
function checkSpeed() {
    read.question("Enter the speed of the car (km/h): ", (inputSpeed) => {
        
        const speed = Number(inputSpeed);//comverts the input into a number

        
        const speedLimit = 70;
        const kmPerDemeritPoint = 5;       

        if (speed <= speedLimit) {//checks for the speed limit
            console.log("Ok");
        } else {
            const kmOverLimit = speed - speedLimit;
            const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);

            if (demeritPoints > 12) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${demeritPoints}`);
            }
        }

        read.close();
    });
}


checkSpeed();//call back the functio
