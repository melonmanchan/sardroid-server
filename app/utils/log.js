'use strict';

import chalk      from 'chalk';
import dateformat from 'dateformat';

const LOG_TYPES = {
    INFO  : chalk.green,
    WARN  : chalk.yellow,
    ALERT : chalk.red,
};

function log(message, type = LOG_TYPES.INFO) {
    const now = Date();
    const timeStamp = dateformat(now, '[HH:MM:ss dd/mm/yyyy] ');
    console.log(timeStamp + type(message));
}

export { LOG_TYPES, log };

