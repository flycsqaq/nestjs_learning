```
@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return "This action returns all cats";
    }
}
```