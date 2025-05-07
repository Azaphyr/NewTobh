import type { NextApiRequest, NextApiResponse } from "next";
import { logUpload } from "@/lib/logger";
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get the absolute path of the logs directory
    const logsDir = path.join(process.cwd(), 'logs');
    const logPath = path.join(logsDir, 'upload.log');

    // Test 1: Check if directory exists
    const dirExists = fs.existsSync(logsDir);
    
    // Test 2: Check if file exists
    const fileExists = fs.existsSync(logPath);
    
    // Test 3: Try to write a test log
    logUpload("TEST LOG ENTRY", {
      test: true,
      timestamp: new Date().toISOString(),
      requestMethod: req.method
    });

    // Test 4: Read the file content
    let fileContent = '';
    if (fileExists) {
      fileContent = fs.readFileSync(logPath, 'utf8');
    }

    // Return test results
    return res.status(200).json({
      success: true,
      tests: {
        directoryExists: dirExists,
        fileExists: fileExists,
        directoryPath: logsDir,
        filePath: logPath,
        fileContent: fileContent
      }
    });
  } catch (error) {
    console.error('Logger test failed:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 