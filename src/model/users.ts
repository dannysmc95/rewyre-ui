import { Model, AbstractModel } from 'rewyre';

@Model('users', 'user', {
	username: 'string',
	password: 'string',
	email: 'string',
	token: '?string',
	blocked: 'boolean',
	roles: 'object',
})
export class UsersModel extends AbstractModel {}
