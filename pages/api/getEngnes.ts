import type { NextApiRequest , NextApiResponse } from "next";
import openai from "@/lib/openai";




type Option = {
    value: string;
    label: string;
}
type Data = {
    modelOptios: Option[];

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const models = await openai.listModels().then((response) => response.data.data);

    const modelOptios = models.map((model) => ({
        value: model.id,
        label: model.id,
    }));
    res.status(200).json({ modelOptios });
}
