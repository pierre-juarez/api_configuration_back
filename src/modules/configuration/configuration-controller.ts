import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConfigurationService } from './configuration-service';
import { ConfigurationDto } from './dto/configuration.dto';
import { AmbienteDto } from './dto/ambiente.dto';

@Controller('api-configuration')
export class ConfigurationController {
  constructor(private readonly clientService: ConfigurationService) {}

  @Get()
  getAllConfigs() {
    return this.clientService.getAllConfigs();
  }

  @Get(':id')
  getConfigClient(@Param('id') id: String, @Body() ambienteObj: AmbienteDto) {
    const { ambiente } = ambienteObj;
    return this.clientService.getConfigClient(Number(id), ambiente);
  }

  @Post()
  createConfig(@Body() configuration: ConfigurationDto) {
    return this.clientService.createConfig(configuration);
  }

  @Put(':id')
  updateConfig(
    @Param('id') id: String,
    @Body() configuration: ConfigurationDto,
  ) {
    return this.clientService.updateConfig(Number(id), configuration);
  }

  @Delete(':id')
  deleteConfig(@Param('id') id: String) {
    return this.clientService.deleteConfig(Number(id));
  }
}
