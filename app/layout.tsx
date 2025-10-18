import type { Metadata } from "next";
import { Box } from "@mui/material";
import OSRSThemeProvider from '@/components/ThemeProvider';
import { runescapeFont, runescapeBold, runescapeSmall } from './fonts';
import AppBar from '@/components/AppBar';
import "./globals.css";

export const metadata: Metadata = {
  title: "WhatShouldIDo - OSRS",
  description: "Find your next OSRS adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${runescapeFont.variable} ${runescapeBold.variable} ${runescapeSmall.variable}`}>
        <OSRSThemeProvider>
          <Box sx={{
            marginX: '10em'
            }}>
          <AppBar />
          {children}
          </Box>
        </OSRSThemeProvider>
      </body>
    </html>
  );
}