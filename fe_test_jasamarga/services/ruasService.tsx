import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://34.101.145.49:8004/api/";

class RuasService {
  getRuas(id : number) {
    return axios
      .get(API_URL + `ruas/${id}`,{
        headers: authHeader()
      })
      .then(async (response) => {
        return response.data;
      });
  }

  getRuasAll(id : number , page : number){
    return axios
      .get(API_URL + `ruas`,{
        headers: authHeader(),
        params: {
          "page" : id,
          "per_page" : page
        }
      })
      .then(async (response) => {
        return response.data;
      })
  }

  deleteRuas(id: string){
    return axios
    .delete(API_URL + `ruas/${id}`,{
      headers: authHeader()
    })
    .then(async (response) => {
      return response.data;
    })
  }
}

export default new RuasService();