const DO_DEBUG = () => process.env.DEBUG || process.env.LOGGER_DEBUG;

export class Logger {
  constructor(private tag: string = 'root') {}

  _strMessage(message: unknown): string {
    try {
      return typeof message === 'string' ? message : JSON.stringify(message);
    } catch (e) {
      return '' + message;
    }
  }

  getPrefix(level: 'debug' | 'info' | 'warn' | 'error'): string {
    return `[${this.tag}][${level}] `;
  }

  debug(message: unknown, ...m: unknown[]) {
    if (DO_DEBUG()) {
      console.debug(this.getPrefix('debug') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
    }
  }

  info(message: unknown, ...m: unknown[]) {
    console.log(this.getPrefix('info') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
  }

  warn(message: unknown, ...m: unknown[]) {
    console.warn(this.getPrefix('warn') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
  }

  error(message: unknown, ...m: unknown[]) {
    if (message instanceof Error) {
      const newExp = new Error(
        `${this.getPrefix('error')} [${message.name}] ${message.message}`
      );
      console.error(newExp, message.stack, ...m.map(i => this._strMessage(i)));
    } else {
      console.warn(this.getPrefix('error') + this._strMessage(message), ...m.map(i => this._strMessage(i)));
    }
  }
}
