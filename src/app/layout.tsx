"use client";
import Footer from "@/components/Footer/Footer";
import NavbarBar from "@/components/Navbar/Navbar";
import Providers from "@/components/Providers/Providers";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Script from "next/script";
import { ReactNode, Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D4666",
      light: "#0A5388",
      dark: "#114B77",
    },
    secondary: { main: "#1D4666" },
    info: {
      main: "#1D4666",
      light: "#0A5388",
      dark: "#114B77",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      "@media (min-width:600px)": {
        fontSize: "6rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2.62rem",
      },
    },
    h3: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
    },
    h4: {},
    h5: {},
    h6: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    body1: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },

    button: {
      textTransform: "none",
      fontSize: 12,
      "@media (min-width:600px)": {
        fontSize: 16,
      },
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loading />}>
            <Providers>
              <NavbarBar />
              <div className="bg-scroll bg-[url('/pattern.png')] bg-no-repeat bg-cover overflow-auto h-screen ">
                <main className="min-h-[75vh] ">{children}</main>
                <Footer />
              </div>
            </Providers>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
