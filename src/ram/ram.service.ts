import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class RamService {
  async getFreeMemory(): Promise<number> {
    return os.freemem();
  }
}
