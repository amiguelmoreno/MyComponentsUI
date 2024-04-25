import { ColumnDef } from '@tanstack/react-table';

export declare const data: Payment[];
export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};
export declare const columns: ColumnDef<Payment>[];
