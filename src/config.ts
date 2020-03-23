/**
 * 基础配置
 */
export const apiPrefix = '/api/v1'
export const serverPort = 4000

/**
 * jwt 认证
 */
export const tokenExpiresIn = 3600 * 24 * 30         // token 过期时间
export const whiteList = '*'

/**
 * 数据库配置信息
 */
export const dbHost = '127.0.0.1'
export const dbUser = 'root'
export const dbPassword = ''
export const dbDatabase = 'test'