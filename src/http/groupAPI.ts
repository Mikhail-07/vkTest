import groups from "../store/groups";
import { IGetGroupsResponse } from "../types/types";

export const fetchGroups = async (): Promise<IGetGroupsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let res:IGetGroupsResponse = {result: 0}
      try {
        res = {result: 1, data: groups}
        if(!res.result || !res.data?.length) throw Error ('Запрос не выполнен')
        resolve(res)
      } catch (error: any) {
        resolve(error)
        throw new Error(error.message);
      }
    }, 1000)
  });
} 