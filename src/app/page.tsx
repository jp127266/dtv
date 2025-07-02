import HomeClient from './HomeClient';

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <HomeClient />
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.notion.so/DigiCaster-Wiki-4bb9e5aa7d044086b4d186d18f226e69?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📁 Read DigiCaster docs
        </a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.notion.so/16e3ad50cbcd41d1bbf069f43e972498?v=61c45b66c52040f9bea8bfc74833dca5&source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📁 Read other product docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://atsc.digicap.tv/releases/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📚 Releases 
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="http://digicaps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Go to DigiCAP HQ site →
        </a>
      </footer>
    </div>
  );
}