import Image from "next/image";
import Footer from "@/app/ui/footer";
import Container from "@/app/ui/container";

export default function Page() {
  return (
    <>
      <Container>
        <h1 className="text-center mb-4 font-serif">Sky Wheel</h1>
        <div className="text-center text-gray-400 mb-4 font-serif">
          Feb 20, 2024
        </div>
        <div className="flex w-full h-full justify-center p-4">
          <Image
            src="/assets/sky-wheel/sky-wheel.gif"
            alt="My Local Image"
            width={400}
            height={400}
          />
        </div>

        <p>
          <a href="https://editor.p5js.org/WangZhewei1027/sketches/eEB5Tp1go">
            https://editor.p5js.org/WangZhewei1027/sketches/eEB5Tp1go
          </a>
        </p>
        <p>
          This is a generative animation of a sky wheel, with continuously
          changing cables and a randomly generated background.
        </p>
        <p>
          In this project, I focus on the colours, to make it looks better. I
          found a website&nbsp;
          <a href="https://colorhunt.co">https://colorhunt.co</a>&nbsp;that
          helped me deal with the colour problem.
        </p>
        <p>
          I also use a sub-function to generate carriage in this work. For the
          math functions, I used sin(), cos(), map().&nbsp;I learned especially
          how to use sin() and cos() to generate spinning animations, that’s
          quite useful.
        </p>
        <p>
          Combining circular and linear movements, I found it is fascinating to
          combine different movements.&nbsp;
        </p>
        <p>
          Sin() and Cos() are very useful when generating a continuous value or
          circular movement, which has never been tried before. I tried to use
          rotate() to spin things last week, but it didn’t work. This week
          learned the right and efficient way to spin things.&nbsp;
        </p>
      </Container>
    </>
  );
}
