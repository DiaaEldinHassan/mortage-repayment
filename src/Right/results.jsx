import React from "react";
import empty from "../assets/images/illustration-empty.svg"
function Results(props) {
    return props.monthly===""?<div className="results empty">
      <img src={empty} alt="empty" />
      <div className="eText"><h2>Results shown here</h2>

 <p> Complete the form and click “calculate repayments” to see what 
  your monthly repayments would be.</p></div>
     
      </div> 
      :<div className='results'>
<div className="rHeader">
  <h2>Your results</h2> 

 <p> Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</p>
</div>
 
<div className="nums">
  <div className="monthly"><p> Your monthly repayments</p>
  <h1>£ {props.monthly}</h1>
  </div>
 <hr style={{width:"100%"}}/>
<div className="total">
  <p>Total you'll repay over the term</p>
  <h2>£ {props.total}</h2>
</div>
  
</div>
 </div>
}
export default Results;