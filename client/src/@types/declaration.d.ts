declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.jpg' {
	const value: any;
	export = value;
}

declare module '*.png' {
	const value: any;
	export = value;
}
