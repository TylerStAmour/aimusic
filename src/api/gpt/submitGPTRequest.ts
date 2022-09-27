import http from '../http';

export default async (prompt: string): Promise<string> => {
    return await new Promise((resolve, reject) => {
        http.post("https://tyler.st/api/gpt/prompt", { prompt: prompt })
            .then((data) => resolve(data.data))
            .catch(reject)
    })
}