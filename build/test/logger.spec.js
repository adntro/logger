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
    it('Does not crash in debug', () => {
        const logger = new logger_1.Logger('Test');
        logger.debug(undefined);
        logger.debug(null);
        logger.debug(new Error('¡asdasd'));
        logger.debug(assert.notDeepStrictEqual);
        assert.ok(true);
    });
    it('Does not crash in error', () => {
        try {
            const logger = new logger_1.Logger('Test');
            logger.error(undefined);
            logger.error(null);
            logger.error(new Error('¡asdasd'));
            logger.error(assert.notDeepStrictEqual);
            assert.ok(true);
        }
        catch (e) {
            assert.fail('Algo ha fallado ' + e.message);
        }
    });
});
//# sourceMappingURL=logger.spec.js.map