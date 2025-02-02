import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should create 3 heroes and return a descending sorted list', () => {
    service.create({name: "Iron Man", superpower: "Being rich and douchey", humilityScore: 1});
    service.create({name: "Segata Sanshiro", superpower: "Selling Sega Saturn in Japan from 1997-1998", humilityScore: 3});
    service.create({name: "Shadow the Hedgehog", superpower: "Speed, teleportation, guns and stuff", humilityScore: 7});

    const superheroes = service.findAll();
    expect(superheroes[1].name).toBe("Segata Sanshiro");
    expect(superheroes[0].humilityScore).toBe(7);
  });
});
