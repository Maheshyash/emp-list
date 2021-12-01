import axios from "axios";
const baseURL = "https://pocemployeeapi.azurewebsites.net/";

export const getEmpData = () => {
  const data = axios.get(baseURL + "api/Employee/List").then((res) => res.data);
  console.log(data, "dataformapiservices");
  return data;
};
export const postEmpData = (data) => {
  axios
    .post(baseURL + "api/Employee/Add", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getParticulardata = (value) =>{
    const data =axios.get(baseURL+'api/Employee/GetItem',{
       params : {EmpCode:value}
    }).then(res=> res.data)
    return data;
}
