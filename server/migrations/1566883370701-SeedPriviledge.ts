import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Priviledge } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'

const SEEDS_PRIVILEDGE = [
  {
    name: 'query',
    category: 'transport',
    description: 'to read transport data'
  },
  {
    name: 'mutation',
    category: 'transport',
    description: 'to edit transport data'
  }
]

export class SeedPriviledge1566883370701 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)
    const domain = await getRepository(Domain).findOne({ where: { name: 'SYSTEM' } })

    try {
      for (let i = 0; i < SEEDS_PRIVILEDGE.length; i++) {
        const priviledge = SEEDS_PRIVILEDGE[i]
        await repository.save({
          domain,
          ...priviledge
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)

    SEEDS_PRIVILEDGE.reverse().forEach(async priviledge => {
      let record = await repository.findOne({ name: priviledge.name })
      await repository.remove(record)
    })
  }
}
