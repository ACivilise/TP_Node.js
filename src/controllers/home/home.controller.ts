import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CreateCatDto } from '../../classes/create-cat-dto';
import { CatsService } from '../../services/cats.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';

@Controller('home')
@UseGuards(RolesGuard)
// @UseGuards(new RolesGuard())
export class HomeController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    @Roles('admin') // Droits nécessaire pour accéder à ce controller
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        return 'This action adds a new cat';
    }

    @Get()
    findAll(@Query() query) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return `This action removes a #${id} cat`;
    }
}