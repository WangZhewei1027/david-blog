import Container from "../ui/container";

const albums = [
  "7lxl8IT9CF5fh7pTN1CHYD",
  "68hTTrAwPFA0dWrxkAUMVl",
  "4AwRYl2kRyCYaAkxHAklZ8",
];

export default function Page() {
  return (
    <>
      <Container>
        <h1 className="text-4xl font-bold">Music Page</h1>
        <p className="mt-4 text-lg">Welcome to the music page!</p>
        <h2 className="text-3xl font-bold">Recent Listening</h2>
        <div className="space-y-2">
          {albums.map((album) => (
            <>
              <iframe
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/album/${album}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </>
          ))}
        </div>
      </Container>
    </>
  );
}
