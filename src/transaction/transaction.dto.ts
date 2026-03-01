import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "transactions" })
export class TransactionDto {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "numeric" })
    amount: number;

    @Column({ name: "categoryid", type: "text" })
    categoryId: string;

    @Column({ type: "text" })
    type: "income" | "expense";

    @Column({ type: "text", nullable: true })
    description?: string;

    @CreateDateColumn({ name: "createdat", type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updatedat", type: "timestamp" })
    updatedAt: Date;
}