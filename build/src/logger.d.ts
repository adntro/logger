export declare class Logger {
    private tag;
    constructor(tag?: string);
    _strMessage(message: unknown): string;
    getPrefix(level: 'debug' | 'info' | 'warn' | 'error'): string;
    debug(message: unknown, ...m: unknown[]): void;
    info(message: unknown, ...m: unknown[]): void;
    warn(message: unknown, ...m: unknown[]): void;
    error(message: string): void;
}
