import { Module } from '@nestjs/common';
import { DocumentsService, OcrService } from './documents.service';

@Module({
  providers: [DocumentsService, OcrService]
})
export class DocumentsModule {}
