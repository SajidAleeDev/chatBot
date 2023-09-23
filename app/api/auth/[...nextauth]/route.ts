import { AuthOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handler = (req: any, res: any) => NextAuth(req, res, AuthOptions);

export { handler as GET, handler as POST };
