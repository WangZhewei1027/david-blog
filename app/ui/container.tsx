export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-4 min-h-screen justify-center pt-8 sm:px-6 sm:pt-10 lg:px-8">
      {children}
    </div>
  );
}
