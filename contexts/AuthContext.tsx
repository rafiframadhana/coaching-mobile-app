import React, { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  isCoachingParticipant: boolean;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isCoachingParticipant: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    // Mock login - check for valid credentials
    if (password === 'password') {
      const isCoachingParticipant = email === 'johndoe@example.com';
      
      const mockUser: User = {
        id: '1',
        name: isCoachingParticipant ? 'John Doe' : 'Regular User',
        email: email,
        isCoachingParticipant,
      };
      
      setUser(mockUser);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isCoachingParticipant: user?.isCoachingParticipant ?? false,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
