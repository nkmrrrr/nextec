import { BaseEntity } from "@/types";

export type User = {
    name: string;
    email: string;
    password: string;
    email_verified_at?: string;
} & BaseEntity;
