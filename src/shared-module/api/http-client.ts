import axios from "axios";
import { apiUrl } from "src/shared-module/constants";

export const httpClient = axios.create({
  baseURL: apiUrl,
});
