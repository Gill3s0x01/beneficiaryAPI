import { Module } from '@nestjs/common';
import { BeneficiariesService } from './beneficiaries.service';
import { BeneficiariesController } from './beneficiaries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Beneficiary, BeneficiarySchema } from './entities/beneficiary.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Beneficiary.name, schema: BeneficiarySchema },
    ]),
  ],
  controllers: [BeneficiariesController],
  providers: [BeneficiariesService],
})
export class BeneficiariesModule {}
