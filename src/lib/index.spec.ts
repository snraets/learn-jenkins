import {hello, world} from './message'

it('says hello', () => {
    expect(hello()).toEqual('hello');
});

it('says world', () => {
    expect(world()).toEqual('world');
});