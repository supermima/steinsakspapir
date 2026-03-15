radio.onReceivedNumber(function (receivedNumber) {
    mot = receivedNumber
    if (bn >= 0) {
        basic.showString("123")
        visResultat(mot)
        basic.pause(1000)
        resultat(bn, mot)
    }
})
input.onButtonPressed(Button.A, function () {
    start()
})
function visResultat (tall: number) {
    if (tall == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (tall == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (tall == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
}
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(bn)
})
input.onButtonPressed(Button.B, function () {
    bn += 1
    if (2 < bn) {
        bn += -3
    }
    visResultat(bn)
})
function start () {
    basic.showString("?")
    radio.setGroup(1)
    bn = -1
    mot = -1
}
function resultat (du: number, motSpiller: number) {
    if (du < 0 || motSpiller < 0) {
        basic.showIcon(IconNames.Sad)
        return
    }
    if (du == 0 && motSpiller == 1) {
        vant = 1
    } else if (du == 1 && motSpiller == 2) {
        vant = 1
    } else if (du == 2 && motSpiller == 0) {
        vant = 1
    } else if (du == motSpiller) {
        vant = 0
    } else {
        vant = -1
    }
    if (vant == 1) {
        basic.showString("Du vant!")
    } else if (vant == -1) {
        basic.showString("Du tapte!")
    } else {
        basic.showString("Uavgjort!")
    }
    start()
}
let vant = 0
let bn = 0
let mot = 0
start()
basic.forever(function () {
	
})
