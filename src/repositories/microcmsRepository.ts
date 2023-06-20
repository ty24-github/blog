import { microcmsClient } from '../api/microcms';
import type { MicroCMSQueries } from 'microcms-js-sdk';

export const getAllBlogs = async (queries: MicroCMSQueries): Promise<any> => {
    return microcmsClient.get({
        endpoint: "blogs",
        queries,
    })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => console.error(err));
};