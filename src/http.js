import axios from "axios";
export let getAllData = () => {
  axios.get(
    "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json"
  );
};
