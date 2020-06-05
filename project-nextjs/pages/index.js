import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Project with NextJs!</title>
      </Head>

      <main>
        <h1> Bem vindo!</h1>
        <Link href="/access/login"> Clique para logar</Link>
      </main>

      <footer>footer</footer>
    </div>
  );
}
