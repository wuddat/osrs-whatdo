'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { osrsTheme } from '@/theme/osrsTheme';

export default function OSRSThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={osrsTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}