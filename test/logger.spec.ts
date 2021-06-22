import {Logger} from '../src/logger';
import * as assert from 'assert';

describe('Logger', () => {
  it('Default tag is root', () => {
    const logger = new Logger();
    assert.strictEqual(logger.getPrefix('debug'), '[root][debug] ');
  });
  it('Prefix is OK', () => {
    const logger = new Logger('Test');
    assert.strictEqual(logger.getPrefix('debug'), '[Test][debug] ');
  });
});
