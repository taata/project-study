import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Project with NextJs!</title>
        <link href="./styles.css" rel="stylesheet" />
      </Head>

      <main>
        <>
          <div className="login">
            <img
              src="https://encurtador.com.br/KLPZ0"
              alt="Gato preto com cara que vai espirrar"
              className="black-cat max-w-xs rounded-full "
            />
            <form
              onSubmit={async (e) => {
                // never called
                debugger;
                e.preventDefault();
              }}
            >
              <div>
                <label>Email:</label>
                <input type="text" name="email" />
              </div>
              <div>
                <label>Senha:</label>
                <input type="password" name="password" />
              </div>
              <div>
                <button type="submit" value="Log In" className="button-submit">
                  Enviar
                </button>
              </div>
            </form>
            <div>
              Não tem conta?
              <Link href="/access/register">
                <a> Cadastre-se agora!</a>
              </Link>
            </div>
          </div>
        </>

        <style jsx>{`
          .login {
            margin: 40px;
            heigth: 100vh;
            display: grid;
            justify-content: center;
          }
          input {
            border: 1px solid;
            border-radius: 40px;
            width: 100%;
            line-height: 30px;
          }
          label {
            font-size: 16px;
            padding-bottom: 10px;
            display: block;
            font-weight: bold;
          }

          .button-submit {
            background: black;
            color: wheat;
            font-size: 16px;
            padding: 10px;
            margin: 30px 0;
          }
        `}</style>
      </main>
    </>
  );
}
