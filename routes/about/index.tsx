import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-typescript.tsx";

import { Button } from "../../components/Button.tsx";

export default function AboutPage() {
  return (
    <>
      <div class="px-4 sm:px-48 py-4 flex flex-col justify-center">
        <h1 class="text-3xl">About</h1>
        <p>
          Hello. I have created my own portfolio for the first time. From now
          on, I will document my various works in this portfolio.
        </p>

        <h2 class="text-2xl">Skill</h2>
        <IconBrandTypescript class="w-9 h-9" />

        <div class="w-50 flex justify-center">
          <Button>
            <a href="/">Go back home</a>
          </Button>
        </div>
      </div>
    </>
  );
}
