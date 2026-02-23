import { IsDate, IsIn, IsInt, IsNotEmpty, isString, IsString, IsUUID } from "class-validator";

export class TransactiondDto {
    @IsNotEmpty()
    @IsUUID()
    id: string

    @IsNotEmpty()
    @IsInt()
    amount: number

    @IsNotEmpty()
    @IsString()
    categoryId: string

    @IsNotEmpty()
    @IsString()
    @IsIn(['income', 'expense'])
    type: string

    @IsNotEmpty()
    @IsDate()
    date: Date

    @IsString()
    description: string

    @IsNotEmpty()
    @IsDate()
    createdAt: Date

    @IsNotEmpty()
    @IsDate()
    updatedAt: Date
}