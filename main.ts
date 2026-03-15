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
    } else {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
function start () {
    basic.showString("?")
}
let bn = 0
start()
basic.forever(function () {
	
})
