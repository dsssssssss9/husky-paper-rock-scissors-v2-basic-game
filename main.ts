input.onButtonPressed(Button.A, function () {
    Maqueen = randint(-1, 1)
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Player = Rock
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Player = Paper
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Player = Scissors
    } else {
        Player = 999
    }
    basic.showNumber(Player)
})
function Compare () {
    Result = 2
    if (Player != Maqueen) {
        if (Math.abs(Player) == Math.abs(Maqueen)) {
            Result = Math.max(Player, Maqueen)
        } else {
            Result = Math.min(Player, Maqueen)
        }
    }
}
let Result = 0
let Player = 0
let Maqueen = 0
let Scissors = 0
let Paper = 0
let Rock = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.clearOSD()
huskylens.writeName(1, "Rock")
huskylens.writeName(2, "Paper")
huskylens.writeName(3, "Scissors")
huskylens.writeOSD("Rock paper Scissors", 75, 30)
basic.pause(2000)
Rock = 0
Paper = -1
Scissors = 1
Maqueen = 999
Player = 999
Result = 999
basic.forever(function () {
    huskylens.request()
})
