import { onConnect } from 'y-partykit'
import * as Party from 'partykit/server'

export default {
	async onConnect(conn: Party.Connection, room: Party.Party) {
		return await onConnect(conn, room, {
			// experimental: persist the document to partykit's room storage
			persist: true,
		})
	},
}
