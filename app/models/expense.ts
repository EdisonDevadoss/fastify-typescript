import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    Optional
  } from "sequelize";
const sequelize = new Sequelize("postgres://edison:edison12345@localhost:5432/my-expenses-dev");

interface ExpenseAttributes {
  id: number;
  particular: number;
  income: number;
  giving: number;
  debt: number;
  taxes: number;
}

interface UserExpenseAttributes extends Optional<ExpenseAttributes, "id"> {}

const Expense: ModelDefined<
ExpenseAttributes,
UserExpenseAttributes
> = sequelize.define(
  'Expense',
  {
    particular:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    income:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    giving:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    debt: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      taxes: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  },
  {
    tableName: 'expenses',
    underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
);
export default Expense;