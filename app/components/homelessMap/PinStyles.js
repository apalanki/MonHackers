const K_WIDTH = 40;
const K_HEIGHT = 28;

const circleStyle = function (eligible) {
    var border_color = eligible ? '#337ab7' : '#808080'; 
    var bg_color = eligible ? 'white' : '#D3D3D3';
    return {

        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,

        border: `5px solid ${border_color}`,
        borderRadius: K_HEIGHT,
        backgroundColor: bg_color,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 2
    };
};

module.exports = {
    circleStyle
};