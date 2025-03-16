export default function CurrentYear() {
	let a = new Date().getFullYear();

	return <h1>{a}</h1>;
}
