export default function Example({ response }) {
  response.doNotStream();
  return <h1>Hello</h1>;
}
