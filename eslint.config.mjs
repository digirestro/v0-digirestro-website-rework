import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "node_modules/**",
    "*.config.mjs",
    // shadcn/ui — third-party patterns; strict React compiler rules are noisy here
    "components/ui/**",
  ]),
])
