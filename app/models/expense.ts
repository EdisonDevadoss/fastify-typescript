import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

interface ExpenseAttributes {
  id: number;
  particular: string;
  income: number;
  giving: number;
  debt: number;
  taxes: number;
}

interface ExpenseModel extends Model<ExpenseAttributes>, ExpenseAttributes {}
class ExpenseClass extends Model<ExpenseModel, ExpenseAttributes> {}

type ExpenseStatic = typeof Model & (new (values?: object, options?: BuildOptions) => ExpenseModel);

function Expense (sequelize: Sequelize): ExpenseStatic {
  return sequelize.define("Expense",
    {
      particular:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[a-z]+$/i,
            msg: 'Particular is string only'
          },
        }
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
  }) as ExpenseStatic;
}

export default Expense;