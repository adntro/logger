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
    error(message) {
        console.error(new Error(this.getPrefix('error') + message));
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map