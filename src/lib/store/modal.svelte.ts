import type { Component } from 'svelte';

export type ModalConfig = {
	component: Component;
	icon: any;
	title: string;
	description?: string;
	closable?: boolean;
};

class ModalManager {
	#current = $state<ModalConfig | null>(null);

	open(config: ModalConfig) {
		this.#current = { closable: true, ...config };
	}

	close() {
		this.#current = null;
	}

	get current() {
		return this.#current;
	}
}

export const modalManager = new ModalManager();
