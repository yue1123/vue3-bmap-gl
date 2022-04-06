/**
 * 
 * @param value 判断是否是字符串的值
 * @returns 
 */
export default function isString(value: any): boolean {
	return Object.prototype.toString.call(value) === '[object String]'
}
