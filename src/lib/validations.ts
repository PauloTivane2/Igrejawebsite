// Validation schemas placeholder
// Can be extended with zod or other validation libraries

export function validateEmail(email: string): boolean {
    return /^\S+@\S+\.\S+$/.test(email);
}

export function validatePhone(phone: string): boolean {
    return /^\+?[\d\s-]{9,}$/.test(phone);
}

export function validateRequired(value: string, fieldName: string): string | null {
    if (!value || value.trim() === "") {
        return `${fieldName} é obrigatório`;
    }
    return null;
}
