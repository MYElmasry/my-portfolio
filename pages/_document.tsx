import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Frontend developer looking for a job"
        />
        <meta
          name="keywords"
          content="Frontend developer, Freelancer, React.js, Next.js"
        />
      </Head>
      <body className="dark:text-white bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
