input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    step += 1
    led.stopAnimation()
})
let step = 0
basic.forever(function on_forever() {
    basic.showNumber(step)
})
