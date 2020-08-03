// document.ready()

$(()=>{
    $(document.body)
    .append(
        $('<input>')

    )
    .append(
        $('<button>')
        .text('ADD')
        .click(()=>){
            $('#tasklist')
            .append(
                $('li')
                    .text($)
            )
        }

    )
    .append
    (
        $('<ul>')
    )

})