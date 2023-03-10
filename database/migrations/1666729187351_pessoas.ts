import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.bigInteger('cpf')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
