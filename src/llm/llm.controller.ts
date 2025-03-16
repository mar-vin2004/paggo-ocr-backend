import { Controller, Post, Body } from "@nestjs/common";
import { LlmService } from "./llm.service";

@Controller("llm")
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Post("explain")
  async explainText(@Body("text") text: string) {
    return { explanation: await this.llmService.getExplanation(text) };
  }
}
