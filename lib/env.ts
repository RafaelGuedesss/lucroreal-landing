// Lê variável de ambiente removendo BOM (U+FEFF) e espaços/quebras de linha,
// que entram quando o valor é colado ou enviado à Vercel via PowerShell e
// quebram os headers HTTP ("Cannot convert argument to a ByteString").
export function env(name: string): string | undefined {
  const value = process.env[name]?.replace(/﻿/g, '').trim();
  return value || undefined;
}
