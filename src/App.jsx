import { useState } from 'react'
import Footer from './Footer/footer'
import Calculator from './Left/calc'
import Results from './Right/results'
function App() {
  const [mortage,setMortage]=useState({monthly:"",total:""});
function getter(mon,tot) {
  console.log(mon+" "+tot);
  setMortage({monthly:mon,total:tot});
}

  return <div className='all'> <div className='container'>
    
<Calculator func={getter}/>
<Results monthly={mortage.monthly} total={mortage.total}/>
  </div>
   <Footer/></div>
}

export default App
