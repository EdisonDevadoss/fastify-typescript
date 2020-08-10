import Expense from '../models/expense';

function create(attributes: any) {
    return Expense.create(attributes);
}

export {create};