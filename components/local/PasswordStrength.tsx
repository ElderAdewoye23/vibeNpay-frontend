
import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const validations = [
    {
      label: 'At least 6 characters',
      isValid: password.length >= 6,
    },
    {
      label: 'Contains lowercase letter',
      isValid: /[a-z]/.test(password),
    },
    {
      label: 'Contains uppercase letter',
      isValid: /[A-Z]/.test(password),
    },
    {
      label: 'Contains number',
      isValid: /\d/.test(password),
    },
  ]

  const allValid = validations.every(v => v.isValid)

  return (
    <div className="mt-2 space-y-2">
      <div className="space-y-1">
        {validations.map((validation, index) => (
          <div key={index} className="flex items-center gap-2">
            {validation.isValid ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <XCircle className="w-4 h-4 text-gray-300" />
            )}
            <span className={`text-sm ${validation.isValid ? 'text-green-600' : 'text-gray-500'}`}>
              {validation.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Overall password strength indicator */}
      {password.length > 0 && (
        <div className="mt-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Password strength</span>
            <span className={`text-sm font-semibold ${
              allValid ? 'text-green-600' : 
              password.length >= 6 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {allValid ? 'Strong' : password.length >= 6 ? 'Medium' : 'Weak'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                allValid ? 'bg-green-500 w-full' : 
                password.length >= 6 ? 'bg-yellow-500 w-2/3' : 'bg-red-500 w-1/3'
              }`}
            />
          </div>
        </div>
      )}
    </div>
  )
}