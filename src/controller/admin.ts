import { Controller, AbstractController, Route, IReturn, IContext, Inject } from 'rewyre';
import { Renderer } from '../provider/renderer';

@Inject(['renderer'])
@Controller('/admin', 'admin')
export class AdminController extends AbstractController {

	public renderer!: Renderer;

	// @Route('GET', '/')
	// public async index(context: IContext): Promise<IReturn> {
	// 	const outputHtml = await this.renderer.render({});
	// 	return { status: 200, content: outputHtml };
	// }
}
