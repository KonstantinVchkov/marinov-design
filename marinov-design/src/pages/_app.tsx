import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is the homepage
  const isHomePage = router.pathname === '/';
  return (
    <>
      <Header isHomePage={isHomePage} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
