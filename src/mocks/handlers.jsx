import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('https://api.example.com/auth/login', async ({ request }) => {
        const { username, password } = await request.json();

        // Lista de usuários fictícios com senhas e tokens
        const users = {
            admin: { password: 'admin', token: 'token123' },
            user1: { password: 'password1', token: 'token456' },
            user2: { password: 'password2', token: 'token789' },
            guest: { password: 'guest', token: 'token000' },
        };

        // Verifica se o usuário e senha correspondem a um dos usuários na lista
        if (users[username] && users[username].password === password) {
            return HttpResponse.json({ token: users[username].token });
        } else {
            return new HttpResponse(null, { status: 401, statusText: 'Credenciais inválidas' });
        }
    }),
];
