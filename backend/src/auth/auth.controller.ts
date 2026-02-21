import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { IParamId } from 'src/users/interfaces/param_id';
import { UserDocument } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { IUserFromFrontDto } from 'src/users/interfaces/dto/userFromFront';
import { IUpdateUserDto } from 'src/users/interfaces/dto/update-user';
import { JwtAuthAdminGuard } from './jwt-auth.admin.guard';
import { JwtAuthAdminManagerGuard } from './jwt-auth.admin.manager.guard';

@Controller('api')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  // Admin, manager
  @UseGuards(JwtAuthAdminManagerGuard)
  @Get('/admin/users')
  findAll(@Query() params: any) {
    console.log('@Get /admin/users'), params;
    return this.userService.findAll(params);
  }

  @Post('/auth/signup')
  async register(@Body() body: IUserFromFrontDto) {
    return this.authService.register(body);
  }

  @Post('/auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  // Admin
  @UseGuards(JwtAuthAdminGuard)
  @Put('/admin/users/:id')
  public update(@Param('id') id: string, @Body() data: IUpdateUserDto): any {
    return this.userService.update(id, data);
  }

  // Admin
  @UseGuards(JwtAuthAdminGuard)
  @Delete('/admin/users/:id')
  public delete(@Param() { id }: IParamId): Promise<UserDocument> {
    return this.userService.delete(id);
  }

  @UseGuards(JwtAuthAdminManagerGuard)
  @Get('testtoken')
  testtoken() {
    console.log('testtoken');
    return this.authService.testtoken();
  }
}
