import { Tweet } from "tweet-rsc";
import { ClientComponent } from "@/components/client_component";

export default async function Home() {
  return (
    <>
      <Tweet id="1629262255744503809" />
      <Tweet id="1641895049427550208" />
      <ClientComponent />
      <Tweet id="1641086480675225601" />
    </>
  );
}
