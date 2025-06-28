import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [UsersModule,UserModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',      // or your DB host
    port: 5432,
    username: 'postgres',   // your PostgreSQL username
    password: 'root',   // your PostgreSQL password
    database: 'postgres',       // your PostgreSQL database
    entities: [__dirname + '/**/*.entity{.ts,.js}'],  // path to your entities
    synchronize: true,      // set to false in production
  }),UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
