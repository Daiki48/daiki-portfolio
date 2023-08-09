import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="My fresh portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Language" content="ja" />
        <title>Daiki's portfolio</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <Component />
      <Footer />
    </>
  );
}
