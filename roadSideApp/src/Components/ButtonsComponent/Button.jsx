

const Button = ({buttonName,  className , onClick}) => {
  return (
    <>
        <button className={className} onClick={onClick}>{buttonName}</button>
      
    </>
  )
}

export default Button
