const { Configuration, OpenAIApi } = require("openai");

(async () => {
    const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
    const openai = new OpenAIApi(configuration);
    const {data} = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Sentiment analysis (positive, negative, neutral): "Mah, ti sei vestito molto male!"`,
        temperature: 0,
        max_tokens: 5,
    });
    console.log(data)
})();