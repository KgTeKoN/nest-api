import { Module } from '@nestjs/common';
import { RamController } from './ram.controller';
import { RamService } from './ram.service';

@Module({
  controllers: [RamController],
  providers: [RamService],
})
export class RamModule {}
