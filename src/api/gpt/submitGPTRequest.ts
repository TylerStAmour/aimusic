import http from '../http';

export default async (prompt: string): Promise<string> => {
    return await http.post("http://tyler.st/api/gpt/prompt", { prompt: prompt })
}