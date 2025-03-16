import * as Tesseract from "tesseract.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OcrService {
  async extractTextFromImage(filePath: string): Promise<string> {
    const { data } = await Tesseract.recognize(filePath, "eng");
    return data.text;
  }
}

export class DocumentsService {}
