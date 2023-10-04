import axios, { AxiosError, AxiosResponse } from "axios";
import {getCookie} from "../../helpers/utils/cookie.ts";
import ResponseInterface from "../../interface/response.interface.ts";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN as string;
if (!accessToken) throw Error("Access token not found in process env!");

// ## handle http request response
const responseBody = (response: AxiosResponse) => {
  return response.data;
};

// ## handle http request error
const errorResponseBody = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.data;
  } else if (error.request) {
    console.log("Error: axios ", error.request);
    // @ts-ignore
      throw Error("Error: axios ", error.request);
  } else {
    console.log("Error: axios ", error.message);
    // @ts-ignore
      throw Error("Error: axios ", error.request);
  }
};

const httpRequest = {
  get: <T>(url = "", params = {}) =>
    axios
      .get<ResponseInterface<T>>(url, {
        params: params,
        headers: {
          Authorization: `Bearer ${getCookie(accessToken)}`,
        },
      })
      .then(responseBody)
      .catch(errorResponseBody),

  post: <T>(url = "", body = {}) =>
    axios
      .post<ResponseInterface<T>>(url, body, {
        headers: {
          Authorization: `Bearer ${getCookie(accessToken)}`,
        },
      })
      .then(responseBody)
      .catch(errorResponseBody),

  put: <T>(url = "", body = {}) =>
    axios
      .put<ResponseInterface<T>>(url, body, {
        headers: {
          Authorization: `Bearer ${getCookie(accessToken)}`,
        },
      })
      .then(responseBody)
      .catch(errorResponseBody),

  delete: <T>(url = "", params = {}, body = {}) =>
    axios
      .delete<ResponseInterface<T>>(url, {
        data: body,
        params: params,
        headers: {
          Authorization: `Bearer ${getCookie(accessToken)}`,
        },
      })
      .then(responseBody)
      .catch(errorResponseBody),
};

export default httpRequest;
