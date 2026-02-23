export function populate(template: string, values: Record<string, unknown>) {
	return template.replace(/{(\w+)}/g, (_, key) => String(values[key] ?? ''));
}
