import { BlogPosts } from "@/app/ui/posts";
import Container from "../ui/container";

export default function Page() {
  return (
    <Container>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Blogs</h1>
      <p className="mb-4">{`Welcome to my blog! Here, I share my thoughts, ideas, and experiences on a variety of topics. Whether you're here to explore new perspectives or just curious about something, I hope you find these posts insightful and engaging. Happy reading!`}</p>
      <div className="border-b" />
      <BlogPosts />
    </Container>
  );
}
