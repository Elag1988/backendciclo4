/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDomicilioDTO } from './dto/create_domicilio.dto';
import { IDomicilio } from './interfaces/domicilio.interface';
import { DomiciliosEntity } from './models/domicilio.entity';

@Injectable()
export class DomicilioService {

    constructor(@InjectRepository(DomiciliosEntity) private readonly domiciliosRepository: Repository<IDomicilio>){}
    
    async getDomicilios(): Promise<IDomicilio[]> {
        const domicilios = await this.domiciliosRepository.find();
        return domicilios;
    }

    async getDomicilioByID(domicilioId: string): Promise<IDomicilio>{
        const domicilio = await this.domiciliosRepository.findOne(domicilioId);
        return domicilio;
    }

    async createDomicilio(createDomicilioDTO: CreateDomicilioDTO): Promise<IDomicilio> {
        const domicilio = this.domiciliosRepository.save(createDomicilioDTO);
        return domicilio;
    }

    async updateDomicilio(domicilioId: string , createDomicilioDTO: CreateDomicilioDTO): Promise<any> {
        const updateDomicilio = await this.domiciliosRepository.update(domicilioId, createDomicilioDTO);
        return updateDomicilio;
    }

    async deleteDomicilio(domicilioId: string): Promise<any> {
        const deleteDomicilio = await this.domiciliosRepository.delete(domicilioId)
        return deleteDomicilio;
    }


}
