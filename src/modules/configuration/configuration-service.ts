import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigurationDto } from './dto/configuration.dto';
import { Configuration } from './entities/configuration.entity';
import { DATABASE_CNX } from 'src/constants/constant';

@Injectable()
export class ConfigurationService {
  constructor(
    @InjectRepository(Configuration, DATABASE_CNX.SMART)
    private repoConfiguration: Repository<Configuration>,
  ) {}

  async getAllConfigs(ambiente: String) {
    try {
      return await this.repoConfiguration.find({ where: { ambiente} });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getConfigClient(id: number, ambiente: String) {
    const config = await this.repoConfiguration.find({
      where: { idCliente: id, ambiente },
    });
    if (!config)
      throw new NotFoundException(
        `No se ha encontrado un configuración con este ID: ${id}`,
      );
    return config;
  }

  async createConfig(configuration: ConfigurationDto) {
    try {
      return await this.repoConfiguration.save(configuration);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateConfig(id: number, configuration: ConfigurationDto) {
    try {
      const updatedConfig = {
        ...configuration,
        created_at: new Date(),
      };

      const result = await this.repoConfiguration.update(id, updatedConfig);
      if (result.affected == 0)
        throw new NotFoundException(
          `No existe un configuración con este ID: ${id}`,
        );
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteConfig(id: number) {
    try {
      const result = await this.repoConfiguration.delete(id);
      if (result.affected == 0)
        throw new NotFoundException(`No existe un cliente con este ID: ${id}`);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
