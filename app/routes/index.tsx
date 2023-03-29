/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ActionFunction, json } from "@remix-run/node";
import { useActionData, useFetcher } from "@remix-run/react";

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

      <button onClick={() => {
        fetcher.submit({});
      }} >click me</button>
      
    </div>
  );
}
