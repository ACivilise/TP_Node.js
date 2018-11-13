import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';

describe('Home Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HomeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HomeController = module.get<HomeController>(HomeController);
    expect(controller).toBeDefined();
  });
});
