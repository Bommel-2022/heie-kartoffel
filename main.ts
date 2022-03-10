let wert = 0
input.onButtonPressed(Button.A, function () {
    wert = randint(1, 3)
    if (wert == 1) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    } else {
        if (wert == 2) {
            music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
            music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
        } else {
            if (wert == 3) {
                music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
                music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
                music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C C C C C C C C ", 120)
})
