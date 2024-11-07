import { UserButton } from "@clerk/nextjs";
import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div>
      <Button>Clique aqui</Button>
      <UserButton showName />
    </div>
  );
}
