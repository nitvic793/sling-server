"use strict";

/**
 * Connections API Configuration
 *
 * Connections are like "saved settings" for your adapters.
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 *
 * NOTE: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 */

module.exports = {
  connections: {
    /**
     * MongoDB configuration
     * @type {Object}
     */
    mongo: {
      adapter: 'sails-mongo',
      host: 'ds039095.mongolab.com',
      port: 39095,
      user: 'slinguser',
      password: 'Abcd1234',
      database: 'sling'
    },

    /**
     * Redis configuration
     * @type {Object}
     */
    redis: {
      adapter: 'sails-redis',
      port: 6379,
      host: 'localhost',
      password: 'Abcd1234',
      database: 'sling',
      options: {
        parser: 'hiredis',
        return_buffers: false,
        detect_buffers: false,
        socket_nodelay: true,
        no_ready_check: false,
        enable_offline_queue: true
      }
    },

    /**
     * PostgreSQL configuration
     * @type {Object}
     */
    postgresql: {
      adapter: 'sails-postgresql',
      database: 'sling',
      host: 'localhost',
      user: 'sling',
      password: 'Abcd1234',
      port: 5432,
      pool: false,
      ssl: false
    },

    /**
     * MySQL configuration
     * @type {Object}
     */
    mysql: {
      adapter: 'sails-mysql',
      host: 'localhost',
      port: 3306,
      user: 'sling',
      password: 'Abcd1234',
      database: 'sling',
      charset: 'utf8',
      collation: 'utf8_swedish_ci'
    },

    /**
     * Microsoft SQL Server configuration
     * @type {Object}
     */
    sqlserver: {
      adapter: 'sails-sqlserver',
      user: 'sling',
      password: 'Abcd1234',
      host: 'localhost',
      database: 'sling',
      options: {
        encrypt: false
      }
    },

    /**
     * OrientDB configuration
     * @type {Object}
     */
    orientdb: {
      adapter: 'sails-orientdb',
      host: 'localhost',
      port: 2424,
      user: 'sling',
      password: 'Abcd1234',
      database: 'sling',
      options: {
        databaseType: 'graph',
        storage: 'plocal',
        transport: 'binary',
        decodeURIComponent: true,
        removeCircularReferences: false,
        unsafeDrop: false,
        parameterized: true,
        fetchPlanLevel: 1
      }
    },

    /**
     * DynamoDB configuration
     * @type {Object}
     */
    dynamodb: {
      adapter: 'sails-dynamodb',
      accessKeyId: '',
      secretAccessKey: '',
      region: 'us-west-1'
    },

    /**
     * FileMaker configuration
     * @type {Object}
     */
    filemaker: {
      adapter: 'sails-filemaker',
      host: 'localhost',
      database: 'sling',
      userName: 'sling',
      password: 'Abcd1234'
    },

    /**
     * Memory configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    memory: {
      adapter: 'sails-memory'
    },

    /**
     * Disk configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    disk: {
      adapter: 'sails-disk'
    }
  }
};
