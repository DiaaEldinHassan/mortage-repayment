import React from "react";
import {Input} from 'antd';

import  calculateMonthlyRepayment,{calculateInterestOnlyRepayment} from "../Functions/CalcFunction";


function Calculator(props) {
   const [values,setValues]=React.useState({amount:"",years:"",terms:""});
   function submit(e) {
   
   if (values.terms==="") {
      var interest=calculateInterestOnlyRepayment(values.amount,values.years);
      props.func(interest,(interest*12));
   } else {
      var monthly=calculateMonthlyRepayment(values.amount,values.years,values.terms);
      props.func(monthly,(monthly*12));
   }
   
      e.preventDefault();
   }
   function changed(e) {
      const {name,value}=e.target;
 
      setValues(prev=>({...prev,[name]:value}));
   }

   function choose(e) {

      if (e.target.value==="Repayment") {
         document.getElementsByName("Repayment")[0].style.border="2px solid hsla(60, 60%, 55%, 1)";
         document.getElementsByName("Repayment")[0].style.color="hsla(60, 60%, 55%, 1)";
         document.getElementsByName("Interest")[0].style.border="";
         document.getElementsByName("Interest")[0].style.color="";
      } else if(e.target.value==="Interest") {
         document.getElementsByName("Repayment")[0].style.border="";
         document.getElementsByName("Interest")[0].style.border="2px solid hsla(60, 60%, 55%, 1)";
         document.getElementsByName("Interest")[0].style.color="hsla(60, 60%, 55%, 1)";
         document.getElementsByName("Repayment")[0].style.color="";
      }
      else
      {
         document.getElementsByName("Repayment")[0].style.border="";
         document.getElementsByName("Interest")[0].style.border="";
      }
    
   }
   function clear() {
      setValues({amount:"",years:"",terms:""});
   }
    return <div className='calculator'>
 <div className="header">
    <h2>Mortgage Calculator</h2> 
 <button className="clear" onClick={clear}>Clear All</button> 
 </div> 
 <div className="amount"><label><h3> Mortgage Amount</h3></label>
         <Input addonBefore="£" maxLength={10} value={values.amount} name="amount" onChange={changed} placeholder="Amount" />
<br/></div>
 <div className="cWrap">
 <div className="term">
 <label>Mortgage Term</label>
    <Input addonAfter={"years"} maxLength={3} value={values.years} name="years" placeholder="Years"  onChange={changed} />
</div>
<div className="rate">
 <label>Interest Rate</label>
<Input addonAfter={"%"} onChange={changed} value={values.terms} name="terms" maxLength={10} placeholder="Rate" /></div>
</div>
 
 <div className="form">
   <h3>Mortgage Type</h3> 
 <div className="choice" name="Repayment"><input onClick={choose}  type="radio" value={"Repayment"} name="choice" /><h3>Repayment</h3></div> 
 <div className="choice" name="Interest"><input onClick={choose}  type="radio" value={"Interest"} name="choice"/><h3>Interest Only</h3></div> 
 <button className="submit" onClick={submit}><i className="fa-solid fa-calculator"></i> Calculate Repayments</button>
 </div>

  </div>
}
export default Calculator;