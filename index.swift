func isValidIP(_ str: String) {
    var count = 0
    let arrayOfNumber = str.split(separator: ".")
    if arrayOfNumber.count == 4{
        for num in arrayOfNumber {
            let newNum = Int(num) ?? 256
            if newNum >= 0 && newNum <= 255{
                count = count + 1
            }
        }
        if count == 4{
            print("true")
        } else {
            print("false")
        }
    }
    
}

isValidIP("0.0.0.0")
isValidIP("137.255.156.100")
isValidIP("1e0.1e1.1e2.2e2")