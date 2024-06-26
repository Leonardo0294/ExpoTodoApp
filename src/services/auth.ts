import { AuthData } from "@/components/auth/provider";

const USER_LIST: AuthData[] = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: 'Admin@'
    },
    {
        username: 'Leonardo',
        email: 'leo@live.com',
        password: 'Leonardo@'
    }
];

export async function signIn(auth: Omit<AuthData, "email">) {
    return USER_LIST.find(user => user.username === auth.username && user.password === auth.password);
}

export async function signUp(auth: AuthData) {
    USER_LIST.push(auth);
    const { password, ...user } = auth;
    return user;
}