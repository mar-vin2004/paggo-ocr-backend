import { Injectable } from "@nestjs/common";
import OpenAI from "openai";

@Injectable()
export class LlmService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Defina no .env
    });
  }

  async getExplanation(text: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: `Explique o seguinte texto: ${text}` }],
    });

    return response.choices[0]?.message?.content || "Nenhuma resposta recebida.";
  }
}
