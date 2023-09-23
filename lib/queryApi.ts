import openai from "./openai";

const getSideProps = async (prompt: string, chatId: string, model: string) => {
  const resopnd = await openai
    .createChatCompletion({
      model: model,
      presence_penalty: 0.6,
      messages: [
        {
          content: prompt,
          role: "user",
        },
      ],
      max_tokens: 20,
      temperature: 0.9,
    })
    .then((response) => {
      console.log("here is the response", response);
      return response.data.choices[0].message?.content?.trim();
    })
    .catch((err) => {
      console.log("here is the error", err);
    });
  return resopnd;
};

export default getSideProps;
