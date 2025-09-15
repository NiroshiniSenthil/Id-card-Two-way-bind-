import { useEffect, useState } from "react";



function Twowaybind(){

    
    const[companyname, setcompanyName] = useState("");
    const handleChange2 = (e) =>{setcompanyName(e.target.value)}
    const[name, setName] = useState("");
    const handleChange1 = (e) =>{setName(e.target.value)}
    const[position, setPosition] = useState("");
    const handleChange3 = (e) =>{setPosition(e.target.value)}
    const[dob, setDob] = useState("");
    const handleChange4 = (e) =>{setDob(e.target.value)}
    const[mail, setMail] = useState("");
    const handleChange5 = (e) =>{setMail(e.target.value)}
    const[empid, setEmpid] = useState("");
    const handleChange6 = (e) =>{setEmpid(e.target.value)}
    const[pic, setPic] = useState(""); // This will hold the image URL
    const handleChange7 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPic(reader.result); // Set image URL
            };
            reader.readAsDataURL(file);
        }
    }
    const[sign, setSign] = useState("");
    const handleChange8 = (e) =>{setSign(e.target.value)}
    


    useEffect(() => {
        console.log("Name updated:", name);
    }, [name]);

    return(
        <>
        <div className="main" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} >
            <div id="main1" >
            <table>
              <tr>
                 <td>CompanyName </td>
                 <td><input type="text"name="CompanyName"value={companyname}onChange={handleChange2}/></td>
              </tr>
              <tr>
                 <td>Name </td>
                 <td><input type="text"name="Name"value={name}onChange={handleChange1}/></td>
              </tr>
              <tr>
                <td>Position </td>
                <td><input type="text"name="Position"value={position}onChange={handleChange3}/></td>
              </tr>
              <tr>
                <td>DOB</td>
                <td><input type="date"name="DOB"value={dob}onChange={handleChange4}/></td>
              </tr><tr>
                <td>Email</td>
                <td><input type="email"name="Email"value={mail}onChange={handleChange5}/></td>
              </tr>
              <tr>
                <td>E-Id</td>
                <td><input type="number"name="empid"value={empid}onChange={handleChange6}/></td>
              </tr>
              <tr>
                <td>Upload Photo</td>
                <td>
                    <input type="file" name="pic" accept="image/*" onChange={handleChange7}/>
                </td>
              </tr>
              <tr>
                 <td>Signature</td>
                 <td><input type="text" name="sign" value={sign}onChange={handleChange8}/></td>
              </tr>
        </table>
        </div>
            <div id="main2" style={{display:"flex",flexDirection:"column"}}>
            
                    <div className= "topblue" style={{width:"280px",height:"70px",backgroundColor:"indigo"}}>
            
                            <h5 id="company" style={{alignItems:"center",fontFamily:"sans-serif",marginLeft:"50px",paddingTop:"10px",color:"white"}}>{companyname}</h5>
                    </div>
                    <div className="Midred" style={{width:"280px",height:"300px",backgroundColor:"lavender"}}>
                        {pic && (
                            <img src={pic} alt="Uploaded" style={{width: "100px", height: "100px", objectFit: "cover", margin: "20px",marginLeft:"130px"}} />
                        )}
                        <div id="tablediv" style={{marginLeft:"40px",marginTop:"10px"}} >
                        <table>
                 
                           <tr><td><div style={{fontStyle:""}}>Name</div></td> 
                               <td>{name}</td>
                            </tr>
                           <tr>
                               <td>Position</td>
                               <td>{position}</td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>{dob}</td>
                            </tr>
                            <tr>
                                 <td>Email</td>
                                 <td>{mail}</td>
                            </tr>
                            <tr>
                                <td>Emp-ID</td>
                                <td>{empid}</td>
                            </tr>
                 
                        </table>
                        </div>
                    </div>
                    <div className="bottomblue" style={{width:"280px",height:"70px",backgroundColor:"indigo"}}>
                              <h5 id="sign" style={{alignItems:"center",fontFamily:"unset",marginLeft:"40px",paddingTop:"10px",color:"white"}}>{sign}</h5>
                    </div>
            
            </div>
        </div>
        </>
    )
}

export default Twowaybind;