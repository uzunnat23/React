import axios from "axios";

const instsance = axios.create({
  baseURL: "https://react-my-burger-1ef87-default-rtdb.firebaseio.com/",
});

export default instsance;
