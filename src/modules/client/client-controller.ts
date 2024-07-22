import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from './client-service';
import { CabClientDto } from './dto/cab-client.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiSecurity,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('API Cliente')
@Controller('api-client')
@UseGuards(AuthGuard('basic'))
@ApiSecurity('basic-auth')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all clients',
    description: 'Retrieve a list of all clients from the database.',
  })
  @ApiResponse({ status: 200, description: 'Return all clients' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getClients() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a client by ID',
    description: 'Retrieve a specific client by their ID.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the client to retrieve' })
  @ApiResponse({
    status: 200,
    description: 'Return the client with the given ID',
  })
  @ApiResponse({ status: 404, description: 'Client not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getClientById(@Param('id') id: string) {
    return this.clientService.getClientById(Number(id));
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new client',
    description: 'Add a new client to the database.',
  })
  @ApiBody({ description: 'The client data to create', type: CabClientDto })
  @ApiResponse({ status: 201, description: 'Client successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  createClient(@Body() client: CabClientDto) {
    return this.clientService.createClient(client);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a client by ID',
    description: "Update an existing client's information by their ID.",
  })
  @ApiParam({ name: 'id', description: 'The ID of the client to update' })
  @ApiBody({ description: 'The updated client data', type: CabClientDto })
  @ApiResponse({ status: 200, description: 'Client successfully updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Client not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  updateClient(@Param('id') id: string, @Body() client: CabClientDto) {
    return this.clientService.updateClient(Number(id), client);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a client by ID',
    description: 'Remove a client from the database by their ID.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the client to delete' })
  @ApiResponse({ status: 200, description: 'Client successfully deleted' })
  @ApiResponse({ status: 404, description: 'Client not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  deleteClient(@Param('id') id: string) {
    return this.clientService.deleteClient(Number(id));
  }
}
