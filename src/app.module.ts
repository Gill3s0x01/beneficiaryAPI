import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BeneficiariesModule,
    MongooseModule.forRoot(
      'mongodb+srv://coffeebeam:coffeebeam@cluster0.8uor4.mongodb.net/test',
    ),
    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
