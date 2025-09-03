import type { User } from "../App";

const url = "https://soudaliga.ligatechapis.com";
export const apiSevice = {
  async Login(login: string, senha: string) {
    try {
      const response = await fetch(url + "/api/Security/UserAuth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login,
          senha,
          guid: "c08c030a-7f45-4cb6-9ff9-f7c7383c560a",
        }),
      });
      const data = await response.json();
      localStorage.setItem("token_pdv_soudaliga", data.accessToken);
      localStorage.setItem(
        "id_pdv_soudaliga",
        data.usuarioID + "___c08c030a-7f45-4cb6-9ff9-f7c7383c560a"
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getUser() {
    const id = localStorage.getItem("id_pdv_soudaliga");

    try {
      if (id) {
        const [UsuarioID, guid] = id.split("___");
        const response = await fetch(
          url +
            `/api/Usuario/Get?UsuarioID=${UsuarioID}&CorporacaoGuid=${guid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + localStorage.getItem("token_pdv_soudaliga"),
            },
          }
        );
        const data = await response.json();
        const user: User = {
          nome: data.nome,
          email: data.login,
          accessToken: localStorage.getItem("token_pdv_soudaliga") || "",
        };
        return user;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  LogOut() {
    localStorage.removeItem("token_pdv_soudaliga");
    localStorage.removeItem("id_pdv_soudaliga");
  },
};
