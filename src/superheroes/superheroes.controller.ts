import { Controller, Post, Body, Get } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDTO } from './dto/create-superhero.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Superheroes')
@Controller('superheroes')
export class SuperheroesController {
    constructor (private readonly superheroesService: SuperheroesService){

    }

    @Post()
    @ApiOperation({ summary: "Add a new hero to the foundation"})
    @ApiResponse({status: 201, description: "Another hero has joined the cause!"})
    create(@Body() createSuperheroDTO: CreateSuperheroDTO){
        this.superheroesService.create(createSuperheroDTO);
        return { message: "Another hero has joined the initiative!"}
    }

    @Get()
    @ApiOperation({ summary: 'Fetch all heroes sorted highest to lowest humility score'})
    @ApiResponse({status: 200, description: "Humble heroes, from best to worst."})
    findAll(){
        return this.superheroesService.findAll();
    }
}
