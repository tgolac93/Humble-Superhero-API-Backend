import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsInt, IsString, Min, Max } from 'class-validator';

export class CreateSuperheroDTO{
    @ApiProperty({ example: "Batman", description: "Superhero's name"})
    @IsString()
    name: string;

    @ApiProperty({ example: "Money, ninja training and stuff", description: "Superhero's superpower"})
    @IsString()
    superpower: string;

    @ApiProperty({ example: 7, description: "Superhero's humility score (1-10)"})
    @IsInt()
    @Min(1)
    @Max(10)
    humilityScore: number;
    
}