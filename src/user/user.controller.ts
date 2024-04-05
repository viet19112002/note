import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './User.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.sto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from 'src/utils/object-id-validate.pipe';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.UserService.create(createUserDto);
  }

  @Post('login')
  login(@Body() body: any) {
    if (!body.username || !body.password) {
      throw new BadRequestException('Username and password are required');
    }

    return this.UserService.login(body.username, body.password);
  }

  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.UserService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true })
  @Put(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.UserService.update(id, updateUserDto);
  }

  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.UserService.remove(id);
  }
}
