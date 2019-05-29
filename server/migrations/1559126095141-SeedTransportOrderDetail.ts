import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { TransportOrderDetail } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class SeedTransportOrderDetail1556863924822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(TransportOrderDetail)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async transportOrderDetail => {
        await repository.save({
          ...transportOrderDetail,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(TransportOrderDetail)
    SEED.reverse().forEach(async transportOrderDetail => {
      let record = await repository.findOne({ name: transportOrderDetail.name })
      await repository.remove(record)
    })
  }
}
