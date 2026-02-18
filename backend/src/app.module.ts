import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password', // поменяй на свой пароль
      database: 'library_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ВНИМАНИЕ: только для разработки!
    }),
  ],
})
export class AppModule {}