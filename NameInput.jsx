// As React is globally imported, the usual named importing needs to be destructured from it instead.
const { useState } = React;

export default ({name}) => {
  const [userName, setUserName] = useState("")

  const handleNameOnChange = (e) => {
    const value = e.target.value
    setUserName(value)
  }
  return (
    <>
        <label htmlFor={name}>
            <input type="text"  id= {name} placeholder={name} name={name}  />
        </label>
    </>
  )
}
