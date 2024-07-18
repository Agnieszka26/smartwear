import { url } from "@/apiHandlers/config";
import { getUser } from "@/apiHandlers/getMe";
import { login } from "@/apiHandlers/login";
import { RoutesPath } from "@/constants/RoutesPath";
import { UserType } from "@/core/types/pageProps/types";
import { AxiosError } from "axios";
import { DefaultSession, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const { data: tokens } = await login(credentials);
          try {
            const user = await getUser(tokens.access);
            return { tokens, user } as any as User;
          } catch (err) {
            const error = err as AxiosError;
            console.error(error.code);
            console.error(error.message);
            console.error(error.name);
            console.error(error.response?.data);
            return null;
          }
        } catch (err) {
          const error = err as AxiosError;
          console.error(error.code);
          console.error(error.message);
          console.error(error.name);
          console.error(error.response?.data);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
  //   error: RoutesPath.LOG_IN,
    signIn: RoutesPath.LOG_IN,
  signOut: RoutesPath.HOME,
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session = token as any;
      return session;
    },
  },
};

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    tokens: {
      access: string;
      refresh: string;
    };
    user: UserType;
  }
}
