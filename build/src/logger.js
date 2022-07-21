"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const DO_DEBUG = () => process.env.DEBUG || process.env.LOGGER_DEBUG;
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
        if (DO_DEBUG()) {
            console.debug(this.getPrefix('debug') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
        }
    }
    info(message, ...m) {
        console.log(this.getPrefix('info') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
    }
    warn(message, ...m) {
        console.warn(this.getPrefix('warn') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
    }
    error(message, ...m) {
        if (message instanceof Error) {
            const newExp = new Error(`${this.getPrefix('error')} [${message.name}] ${message.message}`);
            console.error(newExp, message.stack, ...m.map(i => this._strMessage(i)));
        }
        else {
            console.warn(this.getPrefix('error') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map