import { Provide, AbstractProvider } from 'rewyre';

@Provide('registry', 'shared')
export class Registry extends AbstractProvider {

	protected registry: {[key: string]: any} = {};

	public set(key: string, value: any): void {
		this.registry[key] = value;
	}

	public get(key: string): any {
		if (this.registry[key] === 'undefined') return false;
		return this.registry[key]
	}

	public has(key: string): boolean {
		return this.registry[key] !== 'undefined';
	}
}
