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
    console.debug(this.getPrefix('debug') + this._strMessage(message), ...m);
  }

  info(message: unknown, ...m: unknown[]) {
    console.log(this.getPrefix('info') + this._strMessage(message), ...m);
  }

  warn(message: unknown, ...m: unknown[]) {
    console.warn(this.getPrefix('warn') + this._strMessage(message), ...m);
  }

  error(message: unknown, ...m: unknown[]) {
    if (message instanceof Error) {
      const newExp = new Error(
        `${this.getPrefix('error')} [${message.name}] ${message.message}`
      );
      console.error(newExp, message.stack, ...m);
    } else {
      console.warn(this.getPrefix('error') + this._strMessage(message), ...m);
    }
  }
}
