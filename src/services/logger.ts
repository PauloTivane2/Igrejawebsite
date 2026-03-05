type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
}

function createLogEntry(level: LogLevel, message: string, data?: unknown): LogEntry {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
    data,
  };
}

function log(entry: LogEntry): void {
  if (process.env.NODE_ENV === "production") {
    // In production, only log warnings and errors
    if (entry.level === "info" || entry.level === "debug") return;
  }

  const prefix = `[${entry.timestamp}] [${entry.level.toUpperCase()}]`;

  switch (entry.level) {
    case "error":
      console.error(prefix, entry.message, entry.data ?? "");
      break;
    case "warn":
      console.warn(prefix, entry.message, entry.data ?? "");
      break;
    default:
      console.log(prefix, entry.message, entry.data ?? "");
  }
}

export const logger = {
  info: (message: string, data?: unknown) => log(createLogEntry("info", message, data)),
  warn: (message: string, data?: unknown) => log(createLogEntry("warn", message, data)),
  error: (message: string, data?: unknown) => log(createLogEntry("error", message, data)),
  debug: (message: string, data?: unknown) => log(createLogEntry("debug", message, data)),
};
