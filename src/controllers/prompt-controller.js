const { OpenAIApi } = require("openai")
const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res){
        const openaiAI = openai.configuration()
        const inputModel = new InputPrompt(req.body)
        try {
            const response = await openaiAI.createCompletion(openai.textCompletion(inputModel))
            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(500).json({
                sucess:false,
                error: error.response ? error.response.data : "tem error no servidor"
            })
            
        }
    }
}