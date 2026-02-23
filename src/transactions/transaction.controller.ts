import { Controller, Get, Inject } from "@nestjs/common";
import { TransactionService } from "./transaction.service";

@Controller('transactions')
export class TransactionController {
    constructor(private readonly service: TransactionService) {}

    @Get()
    getTransactions() {
        return this.service.getTransactions()
    }
}