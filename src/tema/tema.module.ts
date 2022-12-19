import { Module } from "@nestjs/common";
import { TemaController } from "./controllers/tema.controller";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./services/tema.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule {}