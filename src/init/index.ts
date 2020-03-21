import debug from 'debug'
import { createConnection, Repository, Connection } from 'typeorm'
import { dbConfig } from '../util/db'
import Audit from '../entity/Audit.entity'

const auditLog = debug('audit')

/**
 * 初始化操作：
 * - 自动创建/同步数据库表；
 * - 自动初始化表示例数据。
 */
class InitScript {
    auditRepository: Repository<Audit>;

    constructor(conn: Connection) {
        this.auditRepository = conn.getRepository(Audit)
    }

    async start() {
        await this.clearAllData()
        await this.initAudit()
        process.exit(0)
    }

    async clearAllData() {
        await this.auditRepository.delete({})
    }

    async initAudit() {
        auditLog('start init audit data.....')

        const a1 = new Audit()
        a1.url = 'http://lcoalhost:4000/user'
        a1.method = 'GET'
        a1.datetime = new Date()

        const a2 = new Audit()
        a2.url = 'http://lcoalhost:4000/role'
        a2.method = 'GET'
        a2.datetime = new Date()

        auditLog('save data one by one')
        await this.auditRepository.save(a1)
        await this.auditRepository.save(a2)

        auditLog('end init audit data.....')
    }
}

createConnection(dbConfig)
    .then(conn => {
        const script = new InitScript(conn)
        script.start()
    })
