// Declaration of global state
export default () => {
  const nameState = useState("name", () => "")

  return {
    nameState,
  }
}
