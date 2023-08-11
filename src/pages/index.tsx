import Head from "next/head";
import Hero from "~/components/coming-soon-page/hero";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lyfego.com/"),
  title: "Lyfego",
  description: "Learn every sport you want.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Lyfego - Undergoing Maintenance</title>
        <meta name="description" content="Learn every sport you want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className}`}>
        <Hero />
      </main>
    </>
  );
}
