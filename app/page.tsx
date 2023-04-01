import { Tweet } from "../tweet-rsc/tweet";

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Tweet id="1629262255744503809" />
      {/* @ts-expect-error Server Component */}
      <Tweet id="1641895049427550208" />
      {/* @ts-expect-error Server Component */}
      <Tweet id="1641086480675225601" />
    </>
  );
}
