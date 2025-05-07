import fs from 'fs';
import path from 'path';

// Create logs directory if it doesn't exist
const logsDir = path.join(process.cwd(), 'logs');
console.log('Logs directory path:', logsDir);

try {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
    console.log('Created logs directory at:', logsDir);
  }
} catch (error) {
  console.error('Error creating logs directory:', error);
}

// Simple direct file writing logger
const writeToLog = (message: string, data: any = {}) => {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      message,
      ...data
    };
    
    const logPath = path.join(logsDir, 'upload.log');
    const logLine = `${timestamp} - ${message} - ${JSON.stringify(data)}\n`;
    
    // Write to file
    fs.appendFileSync(logPath, logLine);
    console.log('Successfully wrote to log file:', logPath);
    
    // Also log to console
    console.log('Log entry:', logEntry);
  } catch (error) {
    console.error('Error writing to log file:', error);
  }
};

// Upload specific logging
export const logUpload = (message: string, context = {}) => {
  writeToLog(message, {
    type: 'UPLOAD',
    ...context
  });
};

// Other logging functions
export const logInfo = (message: string, context = {}) => {
  writeToLog(message, {
    type: 'INFO',
    ...context
  });
};

export const logError = (message: string, error?: Error, context = {}) => {
  writeToLog(message, {
    type: 'ERROR',
    error: error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : undefined,
    ...context
  });
};

export const logDebug = (message: string, context = {}) => {
  writeToLog(message, {
    type: 'DEBUG',
    ...context
  });
};

export const logWarn = (message: string, context = {}) => {
  writeToLog(message, {
    type: 'WARN',
    ...context
  });
};

// Test the logger
try {
  writeToLog('Logger initialized', {
    environment: process.env.NODE_ENV,
    logsDirectory: logsDir
  });
} catch (error) {
  console.error('Failed to initialize logger:', error);
}

export default {
  logUpload,
  logInfo,
  logError,
  logDebug,
  logWarn
}; 