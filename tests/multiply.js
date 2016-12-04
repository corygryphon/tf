exports.multiply = function(y){
    var x = 321;
    if( y == 0 ) {
        return 0;
    }
    if( y > 0 ) {
        return (x + exports.multiply(y - 1));
    }
    if( y < 0 ){
        return -exports.multiply(-y);
    }
};