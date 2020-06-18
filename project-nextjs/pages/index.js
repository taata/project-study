import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <SectionHome>
      <div className="container m-auto my-4">
        <Head>
          <title>Project with NextJs!</title>
        </Head>

        <main>
          <div className="content-home">
            <h1 className="title"> Bem vindo!</h1>
            <Link href="/access/login">
              <a>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Clique para logar
                </button>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </SectionHome>
  );
}

const SectionHome = styled.section`
  background-image: url("https://miro.medium.com/max/3840/1*_tLFm5tk-9EmeC6V7UQ--A.jpeg");
  height: calc(100vh - 60px);

  .content-home {
    justify-items: center;
    display: grid;
    align-items: center;
    grid-template: 100px 1fr /1fr;
    background-color: #ffffff;
  }
`;
