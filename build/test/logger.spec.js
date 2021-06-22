"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../src/logger");
const assert = require("assert");
describe('Logger', () => {
    it('Default tag is root', () => {
        const logger = new logger_1.Logger();
        assert.strictEqual(logger.getPrefix('debug'), '[root][debug] ');
    });
    it('Prefix is OK', () => {
        const logger = new logger_1.Logger('Test');
        assert.strictEqual(logger.getPrefix('debug'), '[Test][debug] ');
    });
});
//# sourceMappingURL=logger.spec.js.map