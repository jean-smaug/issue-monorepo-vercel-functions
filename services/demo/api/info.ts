import { justLog } from "@repo/ui/utils";

export function GET() {
  justLog();

  return new Response("Salut");
}
