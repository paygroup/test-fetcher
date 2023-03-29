/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData, useFetcher } from "@remix-run/react";

export const action: ActionFunction = async () => {
  console.log("action called");
  return json({ message: "all good" })
};

export default function Index() {
  const fetcher = useFetcher();
  const action = useActionData();

  console.log("action", action);

  return (
<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <button onClick={() => {
        fetcher.submit({});
      }} >action</button>
      
    </div>
  );
}
