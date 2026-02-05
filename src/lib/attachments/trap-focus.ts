import { on } from 'svelte/events';

export function trapFocus(node: HTMLElement) {
	const previous = document.activeElement as HTMLElement;

	function focusable() {
		return Array.from(
			node.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const current = document.activeElement as HTMLElement | null;

		const elements = focusable();
		const first = elements.at(0);
		const last = elements.at(-1);

		if (!first || !last || !current) return;

		if (event.shiftKey && current === first) {
			last.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last) {
			first.focus();
			event.preventDefault();
		}
	}

	focusable()[0]?.focus();
	const off = on(node, 'keydown', handleKeydown);

	return () => {
		off();
		previous?.focus();
	};
}
