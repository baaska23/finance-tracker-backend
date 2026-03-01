import { Module } from "@nestjs/common";
import { TransactionController } from "./transaction.controller";
import { TransactionService } from "./transaction.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionDto } from "./transaction.dto";

@Module({
    imports: [TypeOrmModule.forFeature([TransactionDto])],
    controllers: [TransactionController],
    exports: [TransactionService],
    providers: [TransactionService]
})

export class TransactionModule {}