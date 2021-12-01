import React, { useEffect, useState } from "react";
import {getEmpData,getParticulardata} from '../ApiCall/ApiServices'
import logo from '../assets/images/loader.gif'
const Read = () => {
    const [data, setData] = useState([])
    const [selectedData,setSelectedData] =useState()

    useEffect(() => {
        getEmpData().then(res=>setData(res))
    }, [])
  const getManagerName = (code)=>{

      let fetchedData = data.filter(ele=> ele.EmpCode == code).map(ele=> ele.FirstName+' '+ele.LastName)
        return fetchedData
  }
  const handleUpdate = (value) =>{
      console.log(value,'value')
    getParticulardata(value).then(res=>setSelectedData(res))
  }
  console.log(selectedData,'selectedData')
  return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">EmpCode</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">IsManager</th>
            <th scope="col">ManagerName</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        {data.length==0?
        <div className='d-flex justify-content-center mt-5'><img src={logo} alt="logo" className='inline-block'/></div> :<tbody>
        {data.map((ele, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{ele.EmpCode}</td>
            <td>{ele.FirstName}</td>
            <td>{ele.LastName}</td>
            <td>{ele.Email}</td>
            <td>{ele.IsManager.toString()}</td>
            <td>{getManagerName(ele.ManagerCode)}</td>
            <td>{ele.Timestamp}</td>
            <td>
              <button type="button" className="btn btn-success"onClick={()=>handleUpdate(ele.EmpCode)}>
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    }
        
      </table>
  );
};

export default Read;
