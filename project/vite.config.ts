import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../public',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./src/index.html"),
        homepage: resolve(__dirname, "./src/homepage.html"),
        album: resolve(__dirname, "./src/album.html"),
        "user-profile": resolve(__dirname, "./src/user-profile.html"),
        camera: resolve(__dirname, "./src/camera.html"),
        404: resolve(__dirname, "./src/404.html"),
        explore: resolve(__dirname, "./src/explore.html"),

      },
    },
  },
});


