import { Module } from '@nestjs/common';
import { JapbookService } from './japbook.service';
import { JapbookController } from './japbook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JapbookSchema } from './schemas/japbook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Japbook', schema: JapbookSchema }])],
  providers: [JapbookService],
  controllers: [JapbookController]
})
export class JapbookModule {}
