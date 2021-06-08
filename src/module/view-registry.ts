export class ViewRegistry {

	protected static registry: Map<string, any> = new Map();

	public static add(key: string, view: any): boolean {
		if (this.registry.has(key)) return false;
		this.registry.set(key, view);
		return true;
	}

	public static get(key: string): any {
		if (!this.registry.has(key)) return false;
		return this.registry.get(key);
	}

	public static getRegistry(): Map<string, any> {
		return this.registry;
	}
}