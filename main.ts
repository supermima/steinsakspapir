input.onButtonPressed(Button.A, function () {
    start()
})
input.onGesture(Gesture.Shake, function () {
    bn = randint(0, 2)
    basic.showString("123")
    if (bn == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (bn == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (bn == 2) {
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
})
input.onButtonPressed(Button.B, function () {
    bn += 1
})
function start () {
    basic.showString("?")
    radio.setGroup(1)
    bn = -1
    mot = -1
}
let mot = 0
let bn = 0
start()
basic.forever(function () {
	
})
