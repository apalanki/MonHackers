const K_WIDTH = 30;
const K_HEIGHT = 30;

const circleStyle = function (color) {
    return {
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,

        border: '5px solid #f44336',
        borderRadius: K_HEIGHT,
        backgroundColor: 'white',
        textAlign: 'center',
        color: color,
        fontSize: 10,
        fontWeight: 'bold',
        padding: 4
    };
};

module.exports = {
    circleStyle
};