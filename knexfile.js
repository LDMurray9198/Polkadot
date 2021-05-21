module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/tasks.db3'
        }
    }
    useNullAsDefault: true
};
