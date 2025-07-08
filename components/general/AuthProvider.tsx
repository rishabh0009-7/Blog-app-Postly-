"use client";

import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <KindeProvider
      clientId={process.env.NEXT_PUBLIC_KIND_CLIENT_ID!}
      domain={process.env.NEXT_PUBLIC_KIND_HOST!}
      redirectUri={typeof window !== "undefined" ? window.location.origin : undefined}
    >
      {children}
    </KindeProvider>
  );
}
