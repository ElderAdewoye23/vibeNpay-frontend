import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null; 
  isLoading: boolean;
  resetEmail: string | null;
  
  signIn: (token: string, user: User) => void;
  signUp: (token: string, user: User) => void;
  signOut: () => void;

  // Password reset actions
  requestPasswordReset: (email: string) => Promise<{ success: boolean; message?: string }>;
  verifyResetOTP: (email: string, otp: string) => Promise<{ success: boolean; message?: string }>;
  resetPassword: (email: string, newPassword: string) => Promise<{ success: boolean; message?: string }>;
  setResetEmail: (email: string | null) => void;
  clearResetState: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      isLoading: false,
      resetEmail: null,

      signIn: (token, user) =>
        set({ isAuthenticated: true, token, user }),

      signUp: (token, user) =>
        set({ isAuthenticated: true, token, user }),

      signOut: () => {
        set({ isAuthenticated: false, token: null, user: null });
        if (typeof window !== 'undefined') {
          window.location.href = '/sign-in';
        }
      },

      // Request password reset OTP
      requestPasswordReset: async (email) => {
        set({ isLoading: true });
        try {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // In a real app, you would call your API:
          // const response = await fetch('/api/auth/forgot-password', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email }),
          // });
          // const data = await response.json();
          
          // For demo purposes, always return success if email looks valid
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          
          if (isValidEmail) {
            set({ 
              resetEmail: email, 
              isLoading: false 
            });
            
            // Store in localStorage for OTP verification page
            if (typeof window !== 'undefined') {
              localStorage.setItem('pendingResetEmail', email);
            }
            
            return { 
              success: true, 
              message: 'OTP sent to your email address' 
            };
          } else {
            set({ isLoading: false });
            return { 
              success: false, 
              message: 'Please enter a valid email address' 
            };
          }
        } catch (error) {
          set({ isLoading: false });
          console.error('Password reset request error:', error);
          return { 
            success: false, 
            message: 'Network error. Please check your connection and try again.' 
          };
        }
      },

      // Verify OTP for password reset
      verifyResetOTP: async (email, otp) => {
        set({ isLoading: true });
        try {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // In a real app, you would call your API:
          // const response = await fetch('/api/auth/verify-reset-otp', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email, otp }),
          // });
          // const data = await response.json();
          
          // For demo purposes, accept '123456' as valid OTP
          if (otp === '123456' && email === get().resetEmail) {
            set({ isLoading: false });
            return { 
              success: true, 
              message: 'OTP verified successfully. You can now set a new password.' 
            };
          } else {
            set({ isLoading: false });
            return { 
              success: false, 
              message: 'Invalid or expired OTP. Please try again.' 
            };
          }
        } catch (error) {
          set({ isLoading: false });
          console.error('OTP verification error:', error);
          return { 
            success: false, 
            message: 'Verification failed. Please try again.' 
          };
        }
      },

      // Reset password with new password
      resetPassword: async (email, newPassword) => {
        set({ isLoading: true });
        try {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // In a real app, you would call your API:
          // const response = await fetch('/api/auth/reset-password', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email, newPassword }),
          // });
          // const data = await response.json();
          
          // For demo purposes, always succeed if email matches
          if (email === get().resetEmail) {
            set({ 
              isLoading: false,
              resetEmail: null 
            });
            
            // Clear localStorage
            if (typeof window !== 'undefined') {
              localStorage.removeItem('pendingResetEmail');
            }
            
            return { 
              success: true, 
              message: 'Password reset successful! You can now sign in with your new password.' 
            };
          } else {
            set({ isLoading: false });
            return { 
              success: false, 
              message: 'Password reset failed. Please start the process again.' 
            };
          }
        } catch (error) {
          set({ isLoading: false });
          console.error('Password reset error:', error);
          return { 
            success: false, 
            message: 'Password reset failed. Please try again.' 
          };
        }
      },

      // Manually set reset email (useful for navigation between steps)
      setResetEmail: (email) => {
        set({ resetEmail: email });
        if (email && typeof window !== 'undefined') {
          localStorage.setItem('pendingResetEmail', email);
        } else if (typeof window !== 'undefined') {
          localStorage.removeItem('pendingResetEmail');
        }
      },

      // Clear reset state
      clearResetState: () => {
        set({ resetEmail: null });
        if (typeof window !== 'undefined') {
          localStorage.removeItem('pendingResetEmail');
        }
      },
    }),
    {
      name: "vibenpay-auth",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : ({} as Storage)
      ),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        user: state.user,
        resetEmail: state.resetEmail,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Clear reset email if it exists but no user is authenticated
          if (state.resetEmail && !state.isAuthenticated) {
            // Keep reset email for password reset flow
            // Don't clear it here
          }
          
          // Clear authentication if token exists but no user
          if (state.token && !state.user) {
            state.token = null;
            state.isAuthenticated = false;
          }
        }
      },
    }
  )
);