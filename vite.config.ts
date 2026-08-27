import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Sync uploaded profile picture to public/profile.jpg
const userPhotoPath = 'C:\\Users\\giode\\.gemini\antigravity-ide\\brain\\5c4c9b95-77de-4bab-9345-eb198c517a56\\.user_uploaded\\media_1787835641822.jpg';
const targetPhotoPath = path.resolve(__dirname, 'public/profile.jpg');

try {
  if (fs.existsSync(userPhotoPath)) {
    fs.copyFileSync(userPhotoPath, targetPhotoPath);
  }
} catch (e) {
  // Fallback
}

export default defineConfig({
  plugins: [react()],
})
