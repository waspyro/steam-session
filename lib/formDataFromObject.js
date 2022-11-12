import {FormData} from "node-fetch";

export default (object) => {
  const formData = new FormData
  for(const k in object) formData.set(k, object[k])
  return formData
}