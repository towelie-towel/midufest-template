import { Icons } from './Icons.js'

export function LogoutButton() {
	return (
		<button class='flex gap-x-2 text-primary items-center'>
			<Icons.logout />
			Cerrar sesión
		</button>
	)
}
