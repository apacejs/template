import { Application } from 'express'
import AdminResponse from './util/AdminResponse'

export default function (app: Application) {
    app.get('/', (req, res) => res.json(AdminResponse.success('hello world')))
}