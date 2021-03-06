import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Priviledge } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'

const SEEDS_PRIVILEDGES = [
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
    const domains = await getRepository(Domain).find()

    try {
      for (let i = 0; i < domains.length; i++) {
        const domain = domains[i]

        for (let j = 0; j < SEEDS_PRIVILEDGES.length; j++) {
          const priviledge: any = SEEDS_PRIVILEDGES[j]
          priviledge.domain = domain

          await getRepository(Priviledge).save({
            ...priviledge
          })
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)

    SEEDS_PRIVILEDGES.reverse().forEach(async priviledge => {
      let record = await repository.findOne({ name: priviledge.name })
      await repository.remove(record)
    })
  }
}
