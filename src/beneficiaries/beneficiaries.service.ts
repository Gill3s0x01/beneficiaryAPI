import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import {
  Beneficiary,
  BeneficiaryDocument,
} from './entities/beneficiary.entity';

@Injectable()
export class BeneficiariesService {
  constructor(
    @InjectModel(Beneficiary.name)
    private beneficiaryModel: Model<BeneficiaryDocument>,
  ) {}

  create(createBeneficiaryDto: CreateBeneficiaryDto) {
    const beneficiary = new this.beneficiaryModel(createBeneficiaryDto);
    return beneficiary.save(); // returns a promise
  }

  findAll() {
    return this.beneficiaryModel.find();
  }

  findOne(id: string) {
    return this.beneficiaryModel.findById(id);
  }

  update(id: string, updateBeneficiaryDto: UpdateBeneficiaryDto) {
    return this.beneficiaryModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateBeneficiaryDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.beneficiaryModel.deleteOne({ _id: id }).exec();
  }
}
