import { FormattedConsoleLogger, LogLevel, LogMessage, QueryRunner, LoggerOptions } from 'typeorm';

class CustomFormattedConsoleLogger extends FormattedConsoleLogger {
  constructor(options?: LoggerOptions) {
    super(options);
  }
  protected writeLog(
    level: LogLevel,
    logMessage: LogMessage | LogMessage[],
    queryRunner?: QueryRunner,
  ) {
    let msgs = Array.isArray(logMessage) ? logMessage : [logMessage];
    if (msgs.some((msg) => msg.type === 'query-slow')) {
      msgs = msgs.filter((msg) => msg.prefix === 'execution time');
      if (msgs.length > 0) {
        super.writeLog(level, msgs, queryRunner);
      }
      return;
    }
    super.writeLog(level, logMessage, queryRunner);
  }
}

export default CustomFormattedConsoleLogger;
