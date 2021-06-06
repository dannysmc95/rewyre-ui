import { Provide, AbstractProvider } from 'rewyre';

@Provide('registry', 'shared')
export class Registry extends AbstractProvider {}
