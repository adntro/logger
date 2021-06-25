"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(tag = 'root') {
        this.tag = tag;
    }
    _strMessage(message) {
        try {
            return typeof message === 'string' ? message : JSON.stringify(message);
        }
        catch (e) {
            return '' + message;
        }
    }
    getPrefix(level) {
        return `[${this.tag}][${level}] `;
    }
    debug(message, ...m) {
        console.debug(this.getPrefix('debug') + this._strMessage(message), ...m);
    }
    info(message, ...m) {
        console.log(this.getPrefix('info') + this._strMessage(message), ...m);
    }
    warn(message, ...m) {
        console.warn(this.getPrefix('warn') + this._strMessage(message), ...m);
    }
    error(message, ...m) {
        if (message instanceof Error) {
            const newExp = new Error(`${this.getPrefix('error')} [${message.name}] ${message.message}`);
            console.error(newExp, message.stack, ...m);
        }
        else {
            console.warn(this.getPrefix('error') + this._strMessage(message), ...m);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map