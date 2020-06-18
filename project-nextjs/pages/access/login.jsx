import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="container m-auto">
        <Header>
          <Link href="/">
            <a>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Voltar
              </button>
            </a>
          </Link>
        </Header>
        <ContainerLogin>
          <img
            src="https://cdn.dicionariopopular.com/imagens/46482723-914713205554017-4832741937838555136-n-cke.jpg"
            alt="Pokemon - pikachu"
            className="black-cat w-64 h-64 rounded-full"
          />
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>

          <div>
            Não tem conta?
            <Link href="/access/register">
              <a> Cadastre-se agora!</a>
            </Link>
          </div>
        </ContainerLogin>
      </main>
    </>
  );
}

const ContainerLogin = styled.section`
  max-width: 80%;
  height: 100vh;
  margin: 40px auto;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr;
  align-items: center;
  justify-items: center;
`;
const Header = styled.div`
  padding: 20px;
`;
