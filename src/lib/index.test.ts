import { hello_world } from './index';
describe('hello_world',()=>{
	test('logs "hello world"',()=>{
		const spy = jest.spyOn(global.console, 'log');
		hello_world();
		expect(spy).toBeCalledWith('hello world');
	});
});
