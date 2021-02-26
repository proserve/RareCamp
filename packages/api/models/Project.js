import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const ProjectTable = new Table({
  name: process.env.PROJECT_TABLE,
  partitionKey: 'userId',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Project = new Entity({
  name: 'Project',
  attributes: {
    userId: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    education: 'list',
  },
  table: ProjectTable,
})

export default Project
