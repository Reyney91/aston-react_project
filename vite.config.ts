import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
  resolve: {
    alias: { '@app': path.resolve('./src') },
  },
});
