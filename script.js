const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)

window.onload = function() {
    game.run()
}