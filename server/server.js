const express = require('express');
const path = require('path');
const log4js = require('log4js');
const logger = log4js.getLogger();

const bodyParser = require('body-parser');
var plivo = require('plivo');

const port = 5000;
const appBaseUrl = '/gh6';

const app = express();
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(`${appBaseUrl}/services`, require('./routes'));
app.use(`/`, express.static(path.join(__dirname, '../deploy')));
app.get('/*', (req, res) => {
  res.sendFile((path.join(__dirname, '../deploy/index.html')), {title: 'GlobalHack VI' });
});

var server = app.listen(port, function() {
    logger.info('Started listening on port', port);
});

app.all('/reply_to_sms/', function(request, response) {
    // Sender's phone number
    var from_number = request.body.From || request.query.From;
    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;
    // The text which was received
    var text = request.body.Text || request.query.Text;

    var params = {
        'src' : to_number,
        'dst' : from_number
    };
    var body = "Team MonCybers in the house :party_parrot:";

    var r = plivo.Response();
    r.addMessage(body, params);
    console.log (r.toXML());

    response.set({'Content-Type': 'text/xml'});
    response.end(r.toXML());
});

const io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.emit('server event', { foo: 'bar' });
    socket.on('client event', function (data) {
        console.log(data);
    });
});