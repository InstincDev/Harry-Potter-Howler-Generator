export default ({name, value, setValue}) => {
  return (
    <>
        <label htmlFor={name}>
            <input type="text"  id= {name} placeholder={name} name={name} onChange={((e)=>setValue(e.target.value))} value={value} />
        </label>
    </>
  )
}
