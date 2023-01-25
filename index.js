/*
Write an algorithm that will identify valid IPv4 addresses in 
dot-decimal format. IPs should be considered valid if they 
consist of four octets, with values between 0 and 255, inclusive.

*/


function isValidIP(str) {
    let countTrue = 0
    let arrayNumber = str.split(".")
    if(arrayNumber.length === 4){
        for(let i = 0; i < arrayNumber.length; i++){
            // if(parseInt(arrayNumber[i]).length === arrayNumber[i].length){

            
                if(arrayNumber[i].length > 1){
                    if(parseInt(arrayNumber[i]) <= 255 && parseInt(arrayNumber[i]) >= 0 && arrayNumber[i][0] !== "0" && parseInt(arrayNumber[i]) === a){
                        countTrue++
                    }
                } else{
                    if(parseInt(arrayNumber[i]) <= 255 && parseInt(arrayNumber[i]) >= 0){
                        countTrue++
                    }
                }
            // }
        }
        if(countTrue === 4){
            console.log("True")
            return true
        }
    }
    console.log(parseInt(arrayNumber[1]).length)
    return false;
  }

  isValidIP("0.0.0.0")
  isValidIP("137.255.156.100")
  isValidIP('1e0.1e1.1e2.2e2')