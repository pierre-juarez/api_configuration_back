import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LogDto } from './dto/log.dto';
import { Log } from './entities/log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log, 'db_log')
    private repoLogError: Repository<Log>,
  ) {}

  async getAllLogs() {
    try {
      return await this.repoLogError.find();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createLog(logError: LogDto) {
    try {
      return await this.repoLogError.save(logError);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getLogById(id: number) {
    const log = await this.repoLogError.findOne({ where: { id } });
    if (!log) {
      throw new NotFoundException(
        `No se ha encontrado un registro de error con este ID: ${id}`,
      );
    }
    return log;
  }

  async deleteLog(id: number) {
    try {
      const result = await this.repoLogError.delete(id);
      if (result.affected == 0) {
        throw new NotFoundException(
          `No existe un registro de error con este ID: ${id}`,
        );
      }
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
