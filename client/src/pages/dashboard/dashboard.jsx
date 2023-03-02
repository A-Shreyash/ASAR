import React from 'react'

const Dashboard = () => {
  return (
    <div className="container-form" style={{ minHeight: "90vh" }}>
      <div style={{  display: "flex", flexWrap:"wrap",margin:"2px",justifyContent:"space-between" }}>
        <div style={{width:"600px",padding:"20px",justifyContent:"center",textAlign:"center",backgroundColor:"#fff",border:"0.5px solid black",height:"495px",marginRight:"6px",borderRadius:"12px"}}>
          
          <form action="">
            <label htmlFor="fname">First Name : </label><br />
            <input type="text" id='fname' name='fname' value='' /><br />
            <label htmlFor="lname">Last Name : </label><br />
            <input type="text" id='lname' name='lname' value='' /><br />

            <p>Choose problem:</p>

            <input type="radio" name="choose problem" id="prob" value='Contaminated Water' />
            <label htmlFor="prob">Contaminated Water</label><br></br>
            <input type="radio" name="choose problem" id="prob1" value='Garbage' />
            <label htmlFor="prob1">Garbage</label><br></br>
            <input type="radio" name="choose problem" id="prob2" value='Potholes' />
            <label htmlFor="prob2">Garbage</label><br></br>
          
            <label htmlFor="detail">Problem : </label><br />
            <input type="para" id='detail' name='detail' value='' />
          </form>
        </div>
        <div style={{width:"450px",padding:"25px",justifyContent:"center",textAlign:"center",backgroundColor:"#fff",border:"0.5px solid black",height:"495px",marginLeft:"6px",borderRadius:"12px"}}>
          
          
        

          <form action="">
            <input type="file" id='myFile'name='filename' />
          </form>

          

        </div>
      </div>
      <div style={{marginTop:"20px"}}>
        <button style={{padding:"12px 35px",backgroundColor:"orange",color:"#fff",borderRadius:"12px",border:"none"}}>Submit</button>
      </div>
     



    </div>



  )
}

export default Dashboard;
