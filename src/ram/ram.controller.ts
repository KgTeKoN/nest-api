import { Controller, Get } from '@nestjs/common';
import { RamService } from './ram.service';

@Controller('health')
export class RamController {
  constructor(private ramService: RamService) {}

  @Get()
  async freeMemory(): Promise<number> {
    return this.ramService.getFreeMemory();
  }
}
