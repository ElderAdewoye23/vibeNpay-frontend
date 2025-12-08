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
})

export type signInFormData = z.infer<typeof signInSchema>;
export type signUpFormData = z.infer<typeof signUpSchema>;