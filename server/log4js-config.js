const log4js = require('log4js');

log4js.configure({
    appenders: [{
        type: 'console',
        layout: {
            type: 'pattern',
            pattern: 'log_level="%p" app="%x{app}" " - %m%n',
            tokens: {
                app: 'gh6'
            }
        }
    }]
}, {});