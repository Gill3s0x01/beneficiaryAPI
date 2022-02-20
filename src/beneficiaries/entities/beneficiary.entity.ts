import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BeneficiaryDocument = Beneficiary & Document;

@Schema()
export class Beneficiary {
  @Prop()
  account: number;

  @Prop()
  accountDigits: number;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop()
  typeAccount: string;

  @Prop()
  userId: string;
}

export const BeneficiarySchema = SchemaFactory.createForClass(Beneficiary);
