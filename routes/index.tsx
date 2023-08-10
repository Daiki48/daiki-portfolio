import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconArrowRoundaboutRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-roundabout-right.tsx";
import IconThumbUp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/thumb-up.tsx";

export default function Home() {
  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl sm:text-5xl font-bold font-mono py-4">
          Daiki's portfolio
        </h1>
        <div class="my-4 w-32 h-32 rounded-full drop-shadow-md overflow-hidden">
          <img
            src="/icon.png"
            class="w-full h-full object-cover "
          />
        </div>
        <div class="flex flex-row">
          <h1 class="text-2xl pr-2">
            Hi
          </h1>
          <IconThumbUp class="w-9 h-9 animate-bounce" />
        </div>
        <button
          type="button"
          class="px-2 my-2 bg-white rounded border(gray-400 1) hover:bg-gray-200 flex gap-2"
        >
          <a href="/about" class="my-4 flex items-center">
            <IconArrowRoundaboutRight class="w-6 h-6" />About me
          </a>
        </button>
        <button
          type="button"
          class="px-2 my-2 bg-white text-gray rounded border(gray-300 1) hover:bg-gray-200 flex gap-2"
        >
          <a
            target="_blank"
            href="https://github.com/Daiki48/daiki-portfolio"
            class="my-4 flex items-center"
          >
            <IconBrandGithub class="w-6 h-6" />Source code
          </a>
        </button>
      </div>
    </>
  );
}
