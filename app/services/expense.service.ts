import db from '../models';

console.log('Expense is', db.Expense)
function create(attributes: any) {
    return db.Expense.create(attributes);
}

export {create};