import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

// PartialType crea una nueva clase basada en otro DTO existente, pero haciendo que todas sus propiedades sean opcionales.
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
