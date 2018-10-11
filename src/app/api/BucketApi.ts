import axios from 'axios';
import { documentUrl, getHeaders } from './urls';
import { DownloadModel, UploadModel } from '../../models/BucketModel';
import { globalUrlDev } from './servers';
export default class BucketApi {
  static async upload(document: File): Promise<UploadModel> {
    const endpoint = globalUrlDev + documentUrl + 'upload';
    const data = new FormData();
    data.append('file', document);
    const response = await axios.post<UploadModel>(endpoint, data, {headers: getHeaders()});
    return response.data;
  }
  static async download(id: number): Promise<any> {
    const endpoint = globalUrlDev + documentUrl + id + '/download';
    const response = await axios.get<DownloadModel>(endpoint, {data: {}, responseType: 'blob', headers: getHeaders() });
    return response;
  }
}
