import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Tambahkan konfigurasi ini di akhir
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Atau "off" jika ingin dimatikan
    },
  },
];

export default eslintConfig;
