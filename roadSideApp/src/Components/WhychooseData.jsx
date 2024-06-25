
const WhychooseData = ({cardTitle, cardText, cardIcon}) => {
  return (
    <>  
        <div className="choose__card">
        <div>
            <i>{cardIcon}</i>
            <h3>{cardTitle}</h3>
            <p>{cardText}</p>
        </div>
        </div>
    
      
    </>
  )
}

export default WhychooseData
