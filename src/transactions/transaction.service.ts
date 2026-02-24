import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TransactionDto } from "./transaction.dto";

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(TransactionDto)
        private readonly transactionRepo: Repository<TransactionDto>,
    ) {}

    async getTransactions() {
        return this.transactionRepo.find();
    }
}