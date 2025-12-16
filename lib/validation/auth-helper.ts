// utils/auth-helper.ts
export function getPendingResetEmail(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('pendingResetEmail');
  }
  return null;
}

export function clearPendingResetEmail(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('pendingResetEmail');
  }
}