import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client-service';
import { CabClientDto } from './dto/cab-client.dto';

@Controller('api-client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getClients() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  getClientById(@Param('id') id: String) {
    return this.clientService.getClientById(Number(id));
  }

  @Post()
  createClient(@Body() client: CabClientDto) {
    return this.clientService.createClient(client);
  }

  @Put(':id')
  updateClient(@Param('id') id: String, @Body() client: CabClientDto) {
    return this.clientService.updateClient(Number(id), client);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: String) {
    return this.clientService.deleteClient(Number(id));
  }
}
