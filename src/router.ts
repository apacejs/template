import { Application } from 'express'
import audit from './route/audit.route'
import AdminResponse from './util/AdminResponse'

export default function (app: Application) {
    app.use(audit.saveAudit)
    app.get('/', (req, res) => res.json(AdminResponse.success('hello world')))
}