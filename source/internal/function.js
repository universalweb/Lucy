import namespace from '../namespace/index';
import { assign } from './object';
/**
 * Calls a target function with arguments as specified.
 *
 * @function apply
 * @category function
 * @param {Function} target - The target function to call.
 * @param {*} thisArgument - Any object to assign to this within the function.
 * @param {Array} argumentsList - An array-like object specifying the arguments with which target should be called.
 * @returns {*} - The returned value of calling the given target function with the specified this value and arguments.
 *
 * @example
 * apply(function (a) {return a;}, undefined, [2]);
 * // => 2
*/
export const apply = Reflect.apply;
assign(namespace, {
	apply
});
