'use client';
import { SessionProvider } from 'next-auth/react';

function Providers({
  session,
  children,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Providers;
