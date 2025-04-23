import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Image
        src="/img_madruginha.png"
        alt="Madruguinha"
        width={380}
        height={380}
      ></Image>
      <h1>"As pessoas boas devem amar seus inimigos"</h1>
    </div>
  );
}

export default Home;
