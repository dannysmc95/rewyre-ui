import { Controller, AbstractController, Route, IReturn, IContext } from 'rewyre';

@Controller('/admin', 'admin')
export class AdminController extends AbstractController {

	@Route('GET', '/')
	public async index(context: IContext): Promise<IReturn> {
		console.log(context.type);
		return { status: 200, content: 'Hello!' };
	}
}
