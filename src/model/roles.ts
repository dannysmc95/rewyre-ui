import { Model, AbstractModel } from 'rewyre';

@Model('roles', 'general', {
	name: 'string',
	permissions: 'string',
})
export class RolesModel extends AbstractModel {}
