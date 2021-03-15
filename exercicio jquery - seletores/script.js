$(() => {
    $("#txt").val('Texto alterado com jQuery')
    $(".email").val('Texto alterado com jQuery pela classe')

    $(".destaque ~ p").addClass("destaque")
    $('li:first').css("color", "green")
    $('li:first-child').css('color', 'green')
    $('li:last-child').css('color', 'green')

    $('p:gt(2)').css({
        'color': 'orange',
        'font-size': '12px'
    })

    $('a[title]').css('color', 'blue')
    $('a:not([title])').hide()
    $('li:odd').css('background-color', '#ddd')
    $('p:contains(afo 6)').css('color', 'green')
    $('p:has(i)').css('color', 'pink')
    $('p:empty').text('Parágrafo vazio')
    $('p:hidden').show()
})