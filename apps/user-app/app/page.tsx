import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <main>
      <h1 className="text-slate-500 text-2xl">swdeafg</h1>
      <Button className="bg-indigo-500" appName={""}>
        Click me
      </Button>
    </main>
  );
}
