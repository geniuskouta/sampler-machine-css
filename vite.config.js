import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_REPO_NAME ? `/${env.VITE_REPO_NAME}/` : "",
  }
})
