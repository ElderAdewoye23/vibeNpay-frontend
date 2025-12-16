import z from "zod";


export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    rememberMe: z.boolean().optional(),
});


export const signUpSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters long").max(50, "Full name must be at most 50 characters long"),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, "Phone number must be at least 10 digits long").max(15, "Phone number must be at most 15 digits long"),
    password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one number'),
     agreeToTerms: z.boolean()
    .refine((val) => val === true, 'You must agree to the terms and conditions'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});
export const verifyOTPSchema = z.object({
  otp: z.string().length(6, 'OTP must be exactly 6 digits'),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type signInFormData = z.infer<typeof signInSchema>;
export type signUpFormData = z.infer<typeof signUpSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type VerifyOTPFormData = z.infer<typeof verifyOTPSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>