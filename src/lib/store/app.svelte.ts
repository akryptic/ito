import { PersistentState } from '@friendofsvelte/state';

class UserManager {
	#username = new PersistentState('username', '', 'localStorage');
	#onboard = new PersistentState('onboard', true, 'localStorage');
	#avatarId = new PersistentState('avatar_id', 'male-1', 'localStorage');

	get username() {
		return this.#username.current;
	}

	get onboard() {
		return this.#onboard.current;
	}

	get avatarId() {
		return this.#avatarId.current;
	}

	set username(usrname: string) {
		this.#username.current = usrname;
	}

	set onboard(val: boolean) {
		this.#onboard.current = val;
	}

	set avatarId(id: string) {
		this.#avatarId.current = id;
	}
}

export const userManager = new UserManager();
