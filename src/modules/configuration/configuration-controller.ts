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
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('API Configuración')
@Controller('api-configuration')
export class ConfigurationController {
  constructor(private readonly clientService: ConfigurationService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all configurations',
    description: 'Retrieve a list of all configurations from the database.',
  })
  @ApiResponse({ status: 200, description: 'Return all configurations' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getAllConfigs() {
    return this.clientService.getAllConfigs();
  }

  @Post(':id/get-config')
  @ApiOperation({
    summary: 'Get a configuration by ID and environment',
    description: 'Retrieve a specific configuration by its ID and environment.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the configuration' })
  @ApiBody({
    description:
      'The environment object containing the environment information',
    type: AmbienteDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Return the configuration with the given ID and environment',
  })
  @ApiResponse({ status: 404, description: 'Configuration not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getConfigClient(@Param('id') id: string, @Body() ambienteObj: AmbienteDto) {
    const { ambiente } = ambienteObj;
    return this.clientService.getConfigClient(Number(id), ambiente);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new configuration',
    description: 'Add a new configuration to the database.',
  })
  @ApiBody({
    description: 'The configuration data to create',
    type: ConfigurationDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Configuration successfully created',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  createConfig(@Body() configuration: ConfigurationDto) {
    return this.clientService.createConfig(configuration);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a configuration by ID',
    description: "Update an existing configuration's information by its ID.",
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the configuration to update',
  })
  @ApiBody({
    description: 'The updated configuration data',
    type: ConfigurationDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Configuration successfully updated',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Configuration not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  updateConfig(
    @Param('id') id: string,
    @Body() configuration: ConfigurationDto,
  ) {
    return this.clientService.updateConfig(Number(id), configuration);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a configuration by ID',
    description: 'Remove a configuration from the database by its ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the configuration to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'Configuration successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Configuration not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  deleteConfig(@Param('id') id: string) {
    return this.clientService.deleteConfig(Number(id));
  }
}
