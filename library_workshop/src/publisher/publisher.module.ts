import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherEntity } from 'src/entities/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublisherEntity])],
  controllers: [PublisherController],
})
export class PublisherModule {}
