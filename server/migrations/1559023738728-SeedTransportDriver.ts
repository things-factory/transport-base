import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { TransportDriver } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class SeedTransportDriver1556863924822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(TransportDriver)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async transportDriver => {
        await repository.save({
          ...transportDriver,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(TransportDriver)
    SEED.reverse().forEach(async transportDriver => {
      let record = await repository.findOne({ name: transportDriver.name })
      await repository.remove(record)
    })
  }
}
