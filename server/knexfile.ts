import path from 'path'

module.exports = {
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'nlw',
      port: 3306
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        extension: 'ts'
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
      extension: 'ts'
  }
}