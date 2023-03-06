var divSquare = '<div id = "s$coord" class = "square $color"></div>';
var divFigure = '<div id = "f$coord" class = "figure">$figure</div>';

$(function(){
    createBoard();
    showFigures('wwwwwwwwwwwwwwww11111111111111111111111111111111bbbbbbbbbbbbbbbb');
    setDraggable();
})

function setDraggable(){
    $('.figure').draggable();
}

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

function showFigures(figure){
    for (var coord = 0; coord < 64; coord++)
    showFigureAt(coord, figure.charAt(coord));
}

function showFigureAt(coord, figure){
    $('#s' + coord).html(divFigure.replace('$coord', coord).replace('$figure', getCheckersSymbol(figure)));
}

function getCheckersSymbol(figure){
    switch(figure){
        case 'w' : return '&#128656;';
        case 'b' : return '&#128659;';
        default : return '';
    }
}
