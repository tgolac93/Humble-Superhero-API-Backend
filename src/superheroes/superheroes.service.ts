import { Injectable } from '@nestjs/common';
import { CreateSuperheroDTO } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroesService {
    //had to write it like this because of a weird typescript error, never experienced this in my previous project
    private superheroes:CreateSuperheroDTO[] = [];

    create(superhero : CreateSuperheroDTO){
        this.superheroes.push(superhero);
    }

    findAll(){
        return this.superheroes.sort((a,b) => b.humilityScore - a.humilityScore);
    }
    

}
