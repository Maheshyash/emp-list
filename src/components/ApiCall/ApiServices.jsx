import axios from "axios";
const instance = axios.create({
  baseURL: "https://pocemployeeapi.azurewebsites.net/",
});
export default instance;
export const getEmpData = () => {
  const data = instance.get("api/Employee/List").then((res) => res.data);
  return data;
};
export const postEmpData = (data) => {
  instance
    .post("api/Employee/Add", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getParticulardata = (value) => {
  const data = instance
    .get("api/Employee/GetItem", {
      params: { EmpCode: value },
    })
    .then((res) => res.data);
  return data;
};
