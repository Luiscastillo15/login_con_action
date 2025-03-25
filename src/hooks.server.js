export function handle({ event, resolve }) {
	// Obtener cookie de sesión
	const session = event.cookies.get('session');

	if (session) {
		try {
			event.locals.user = JSON.parse(session);
		} catch (e) {
			event.locals.user = null;
		}
	} else {
		event.locals.user = null;
	}

	return resolve(event);
}
