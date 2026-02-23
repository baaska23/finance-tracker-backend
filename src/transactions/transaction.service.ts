import { Inject, Injectable } from "@nestjs/common";
import { supabase } from "supabase.config";

@Injectable()
export class TransactionService { 
    async getTransactions() {
        const {data: transactions, error} = await supabase.from('transactions').select('*')
        if ( error) {
            throw new Error('Failed to fetch transactions from database')
        }
        console.log("transactions", transactions)
        return transactions
    }
}