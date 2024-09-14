"use cliet";
import Profile from "@/app/ui/profile";
import Footer from "@/app/ui/footer";

function MyCard() {
  return (
    <section className="bg-gray-100 rounded-lg shadow-md p-8 h-full w-full break-words">
      This is some long text that should wrap and not break the layout. It will
      adjust according to the flex parent.
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full max-w-7xl mx-auto pr-4 md:flex-row ">
        <div className="flex-1 basis-0 pl-4 pt-4 md:basis-1/3">
          <Profile />
        </div>
        <div className="flex-1 basis-0 pl-4 pt-4 md:basis-2/3">
          <MyCard />
        </div>
      </div>
      <Footer />
    </main>
  );
}
