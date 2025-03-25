import { redirect } from '@sveltejs/kit';

const users = [{ id: 1, email: 'user@example.com', password: 'password123' }];

export function load({ locals }) {
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const user = users.find((u) => u.email === email && u.password === password);

		if (!user) {
			return {
				error: 'Invalid credentials'
			};
		}

		cookies.set('session', JSON.stringify(user), {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/dashboard');
	}
};
