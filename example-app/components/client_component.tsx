"use client";

import { Tweet } from "tweet-rsc";

export function ClientComponent() {
  return (
    <>
      <h1>{"I'm a client component"}</h1>
      <Tweet id="1641086480675225601" />
    </>
  );
}
