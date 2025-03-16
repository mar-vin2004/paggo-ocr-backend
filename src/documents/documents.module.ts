import { Module } from '@nestjs/common';
import { DocumentsService, OcrService } from './documents.service';
import { DocumentsController } from './documents.controller';

@Module({
  providers: [DocumentsService, OcrService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}
