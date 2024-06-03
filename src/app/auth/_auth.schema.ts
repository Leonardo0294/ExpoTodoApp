import { z } from "zod";

const UPPERCASE_REGEX = /[A-Z]/;
const LOWERCASE_REGEX = /[a-z]/;
const SYMBOL_REGEX = /[.*/@\-?¿!¡]/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Define un nombre de usuario, correo electrónico y contraseña predeterminados
const DEFAULT_USERNAME = "leonardo";
const DEFAULT_EMAIL = "leo@live.com";
const DEFAULT_PASSWORD = "Fabian123";

export const loginSchema = z.object({
    username: z.string().min(5, {
        message: "El nombre de usuario debe tener al menos 5 caracteres"
    }).max(10, {
        message: "El nombre de usuario no debe tener más de 10 caracteres"
    }).default(DEFAULT_USERNAME), // Valor predeterminado para el nombre de usuario
    password: z.string().min(5, {
        message: "La contraseña debe tener al menos 5 caracteres"
    }).regex(UPPERCASE_REGEX, {
        message: "La contraseña debe tener al menos una mayúscula"
    }).regex(LOWERCASE_REGEX, {
        message: "La contraseña debe tener al menos una minúscula"
    }).regex(SYMBOL_REGEX, {
        message: "La contraseña debe tener al menos un símbolo"
    }).default(DEFAULT_PASSWORD) // Valor predeterminado para la contraseña
});

// Extiende el esquema de inicio de sesión para incluir el correo electrónico con un valor predeterminado
export const signUpSchema = loginSchema.extend({
    email: z.string().regex(EMAIL_REGEX, {
        message: "El email no es válido"
    }).default(DEFAULT_EMAIL) // Valor predeterminado para el correo electrónico
});
