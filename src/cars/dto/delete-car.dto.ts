import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class DeleteCarDto {
    
    @IsString()
    @IsUUID()
    readonly id: string;
}