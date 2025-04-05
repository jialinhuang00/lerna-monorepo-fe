import Image from "next/image";
import ShareButton from '@shared/pure-css-components/ShareButton'
import StoryBookButton from '@shared/storybook-components/Button'

export default function Home() {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ShareButton size="small" variant={'primary'} label="native-css" />
      <ShareButton size="small" variant={'secondary'} label="native-css" />
      <ShareButton size="medium" variant={'primary'} label="native-css" />
      <ShareButton size="medium" variant={'secondary'} label="native-css" />
      <ShareButton size="large" variant={'primary'} label="native-css" />
      <ShareButton size="large" variant={'secondary'} label="native-css" />
      <ShareButton size="large" variant={'none'} label="native-css" />
      <StoryBookButton size="large" primary label="storybook-css" />
      <StoryBookButton size="medium"  label="storybook-css" />
      <StoryBookButton size="small" label="storybook-css" />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
