import { createContext, PropsWithChildren, use } from 'react';
import { useStorageState } from './useStorageState';
const AuthContext = createContext<{
  signIn: (token: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: (token: string) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

type Props = PropsWithChildren<{}>;

export const useSession = () => {
  const value = use(AuthContext);

  if (!value) {
    throw new Error('useSession must b wrapped in <SessionProvider>');
  }

  return value;
};

export const SessionProvider = ({ children }: Props) => {
  const [[isLoading, session], setSession] = useStorageState('access_token');
  console.log('seesion value is', session);

  return (
    <AuthContext
      value={{
        signIn: (token: string) => {
          console.log('setting token');
          // Perform sign-in logic here
          setSession(token);
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext>
  );
};
