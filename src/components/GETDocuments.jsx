import React from "react";
import axios from "axios";

class GETDocuments extends React.Component {
  constructor() {
    super();
    this.mockApi = this.mockApi.bind(this);

    this.state = {
      result: [],
    }
  }

  mockApi = () => {
    const resposeGET = {
      "count": 3,
      "next": null,
      "previous": null,
      "results": [
        {
          "external_id": "",
          "open_id": 1,
          "token": "3d1fae0c-aca6-4815-a90c-b5ca732e6438",
          "status": "signed",
          "name": "NFEM PARA ASSINATURA.pdf",
          "folder_path": "/",
          "original_file": "https://zapsign.s3.amazonaws.com/2022/5/docs/3b49cd74-5df1-4f94-bc5f-159bc292e257/2333c9b5-28b2-42d9-a0a9-13eb0416993b.pdf",
          "signed_file": "https://zapsign.s3.amazonaws.com/2022/5/pdf/ab379eb1-49b3-4599-9180-aeae8ca49486/e8ca6acd-e7d2-49aa-88c0-fe135cc1bef8.pdf",
          "created_at": "2022-05-18T19:39:54.632657Z",
          "last_update_at": "2022-05-18T19:41:49.219289Z",
          "created_through": "web",
          "deleted": false,
          "deleted_at": null
        },
        {
          "external_id": "",
          "open_id": 2,
          "token": "96510e7f-431c-48b9-bc21-e25663339d64",
          "status": "pending",
          "name": "teste-hubs.pdf",
          "folder_path": "/",
          "original_file": "https://zapsign.s3.amazonaws.com/2022/5/docs/e6b327db-d7b7-4656-9b27-e1b19c819e37/ae5619c1-ee2d-43ef-b051-e7be19c6d0cb.pdf",
          "signed_file": null,
          "created_at": "2022-05-25T16:21:16.054719Z",
          "last_update_at": "2022-06-01T11:45:23.770371Z",
          "created_through": "web",
          "deleted": true,
          "deleted_at": "2022-06-01T11:45:23.770173Z"
        },
        {
          "external_id": "",
          "open_id": 3,
          "token": "c248d5f0-fbb2-4e34-ad28-9d0eeefe5761",
          "status": "pending",
          "name": "teste",
          "folder_path": "/",
          "original_file": "https://zapsign.s3.amazonaws.com/2022/5/pdf/70b3806e-d5b5-4908-af20-4701370dfd0f/a2ba0502-28c0-4cb0-9de1-0f5790bd6b5d.pdf",
          "signed_file": null,
          "created_at": "2022-05-25T16:39:25.840395Z",
          "last_update_at": "2022-06-01T11:45:23.756936Z",
          "created_through": "template",
          "deleted": true,
          "deleted_at": "2022-06-01T11:45:23.756728Z"
        }
      ]
    }

    return resposeGET;
  }
    API = () => {

      const options = {
        method: 'GET',
        url: 'https://api.zapsign.com.br/api/v1/docs/',
        params: {
          api_token: '03899cd9-b360-4569-a02a-7529d39a38298e2a4401-672c-4354-b6f2-d68aec612436'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    }


  componentDidMount() {
    // const result = this.mockApi();
    const result = this.API();
    this.setState({
      result: result.results,
    })
    // this.mockApi();
    // console.log(result.results);

  }


  render() {
    const { result } = this.state;
    return (
      <div>
        <h1>Documentos:</h1>
        { result ? result.map((e) => (
          <div key={ e.open_id }>
            <p>{ e.name }</p>
            <a href={ e.original_file } download>
              Baixe este documento
            </a>
          </div>
        )) : 'oi' }
      </div>
    )
  }
};

export default GETDocuments;