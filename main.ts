serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.X))
    serial.writeValue("y", input.acceleration(Dimension.Y))
    serial.writeValue("z", input.acceleration(Dimension.Z))
    if (input.buttonIsPressed(Button.A)) {
        serial.writeValue("a", 1)
    } else {
        serial.writeValue("a", 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        serial.writeValue("b", 1)
    } else {
        serial.writeValue("b", 0)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        serial.writeValue("h", 1)
    } else {
        serial.writeValue("h", 0)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        serial.writeValue("i", 1)
    } else {
        serial.writeValue("i", 0)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        serial.writeValue("j", 1)
    } else {
        serial.writeValue("j", 0)
    }
    serial.writeValue("l", input.lightLevel())
})
