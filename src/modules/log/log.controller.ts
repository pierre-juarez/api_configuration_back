import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LogService } from './log.service';
import { LogDto } from './dto/log.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiSecurity,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('API Log Error')
@Controller('log-error')
@UseGuards(AuthGuard('basic'))
@ApiSecurity('basic-auth')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all error logs',
    description: 'Retrieve a list of all error logs from the database.',
  })
  @ApiResponse({ status: 200, description: 'Return all error logs' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getAllLogs() {
    return this.logService.getAllLogs();
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new error log',
    description: 'Add a new error log to the database.',
  })
  @ApiBody({
    description: 'The error log data to create',
    type: LogDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Error log successfully created',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  createLog(@Body() logError: LogDto) {
    return this.logService.createLog(logError);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get an error log by ID',
    description: 'Retrieve a specific error log by its ID.',
  })
  @ApiParam({ name: 'id', description: 'The ID of the error log' })
  @ApiResponse({
    status: 200,
    description: 'Return the error log with the given ID',
  })
  @ApiResponse({ status: 404, description: 'Error log not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getLogById(@Param('id') id: string) {
    return this.logService.getLogById(Number(id));
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete an error log by ID',
    description: 'Remove an error log from the database by its ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the error log to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'Error log successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Error log not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  deleteLog(@Param('id') id: string) {
    return this.logService.deleteLog(Number(id));
  }
}
