var divSquare = '<div id = "s$coord" class = "square $color"></div>';
var divFigure = '<div id = "f$coord" class = "figure">$figure</div>';
$(function(){
    createBoard();
    showFigureAt(0, 'c');
    showFigureAt(63, 'c');
})

function createBoard() {
    $('.board').html('');
    for (var coord = 0; coord < 64; coord++)
    {
        $('.board').append(divSquare.replace('$coord', coord).replace('$color', 
        isBlackSquareAt(coord) ? 'black' : 'white'));

    }
}

function isBlackSquareAt(coord){
    return (coord % 8 + Math.floor(coord / 8)) % 2;
}

function showFigureAt(coord, figure){
    $('#s' + coord).html(divFigure.replace('$coord', coord).replace('$figure', figure));
}