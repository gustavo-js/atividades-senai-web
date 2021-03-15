$(() => {
    let vez = 1
    let vencedor = ""

    const casasIguais = (a, b, c) => {
        const bgA = $("#casa" + a).css("background-image")
        const bgB = $("#casa" + b).css("background-image")
        const bgC = $("#casa" + c).css("background-image")

        if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
            if (bgA.indexOf("1.png") >= 0) vencedor = "1"
            else vencedor = "2"
            
            return true
        } else {
            return false
        }
    }

    const verificarFimDeJogo = () => {
        if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)) {
            $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>")
            $(".casa").off("click")
        }
    }

    $(".casa").click(function(){
        const bg = $(this).css("background-image")
        if (bg == "none" || bg == "") {          
            const fig = "url(" + vez.toString() + ".png)"
            $(this).css("background", fig)
            vez = (vez == 1 ? 2 : 1)
            verificarFimDeJogo()
        }
    });
})
