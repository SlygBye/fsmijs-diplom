import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ICreateReservationDto } from './interfaces/dto/create-reservation';
import { JwtAuthClientGuard  } from 'src/auth/jwt-auth.client.guard';
import { JwtAuthManagerGuard  } from 'src/auth/jwt-auth.manager.guard';

@Controller('api')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @UseGuards(JwtAuthClientGuard)
  @Get('/client/reservations')
  public findByUserId(@Query() params: any) {
    return this.reservationService.findByUserId(params);
  }

  @UseGuards(JwtAuthManagerGuard)
  @Get('/manager/reservations')
  public mgrfindByUserId(@Query() params: any) {
    console.log('CONTROLLER - /manager/reservations', params);
    return this.reservationService.findByUserId(params);
  }

  @UseGuards(JwtAuthClientGuard)
  @Post('/client/reservations')
  public create(@Body() body: ICreateReservationDto): any {
    return this.reservationService.create(body);
  }

  @UseGuards(JwtAuthClientGuard)
  @Delete('/client/reservations/:id')
  public delete(@Param() { id }: any): any {
    return this.reservationService.delete(id);
  }

  @UseGuards(JwtAuthManagerGuard)
  @Delete('/manager/reservations/:id')
  public mgrdelete(@Param() { id }: any): any {
    return this.reservationService.delete(id);
  }
}
