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
let Rock = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.clearOSD()
huskylens.writeName(1, "Rock")
huskylens.writeName(2, "Paper")
huskylens.writeName(3, "Scissors")
huskylens.writeOSD("Rock paper Scissors", 75, 30)
basic.pause(2000)
let Scissors = 1
let Paper = -1
Maqueen = 2
Player = 2
Result = 2
basic.forever(function () {
    huskylens.request()
})
