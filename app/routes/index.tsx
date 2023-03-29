/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ActionFunction, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export const action: ActionFunction = async () => {
  console.log("action called");
  return json({ message: "all good" })
};

export default function Index() {
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.submit({}); // not working
  }, [])

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <button onClick={() => {
        fetcher.submit({}); // not working
      }} >click me</button>
      
    </div>
  );
}
