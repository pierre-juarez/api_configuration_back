import { Repository } from 'typeorm';
import { CabClient } from './entities/cab-client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CabClientDto } from './dto/cab-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(CabClient, 'fs_smart')
    private cabClient: Repository<CabClient>,
  ) {}

  async getAllClients() {
    try {
      return await this.cabClient.find();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getClientById(id: number) {
    const client = await this.cabClient.findOne({ where: { id } });
    if (!client)
      throw new NotFoundException(
        `No se ha encontrado un cliente con este ID: ${id}`,
      );
    return client;
  }

  async createClient(client: CabClientDto) {
    try {
      const newClient = this.cabClient.create({
        cliente: client.cliente,
      });
      return await this.cabClient.save(newClient);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateClient(id: number, client: CabClientDto) {
    try {
      const updatedClient = {
        cliente: client.cliente,
        UpdatedAt: new Date(),
      };
      const result = await this.cabClient.update(id, updatedClient);
      if (result.affected == 0)
        throw new NotFoundException(`No existe un cliente con este ID: ${id}`);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteClient(id: number) {
    try {
      const result = await this.cabClient.delete(id);
      if (result.affected == 0)
        throw new NotFoundException(`No existe un cliente con este ID: ${id}`);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
