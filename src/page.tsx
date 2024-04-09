import { redirect } from "next/navigation";
import React from "react";

function RootPage() {
  redirect("/en");
  return <div>RootPage</div>;
}

export default RootPage;
