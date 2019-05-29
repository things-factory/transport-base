import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { TransportVehicle } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class SeedTransportVehicle1556863924822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(TransportVehicle)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async transportVehicle => {
        await repository.save({
          ...transportVehicle,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // const repository = getRepository(TransportVehicle)
    // SEED.reverse().forEach(async transportVehicle => {
    //   let record = await repository.findOne({ regNumber: transportVehicle.regNumber })
    //   await repository.remove(record)
    // })
  }
}
