import { auth } from "@clerk/nextjs/server";
import { Navbar } from "../_components/navbar";
import { redirect } from "next/navigation";

export default async function SubScriptionPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <Navbar />;
}
