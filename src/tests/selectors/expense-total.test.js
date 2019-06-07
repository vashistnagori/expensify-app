import {expenseTotal} from '../../selectors/expense-total';
import {testexp} from '../fixture/expense';

test("testing from expense total with no value",()=>{
    const total=expenseTotal([]);
    expect(total).toBe(0);
});

test("testing from expense total with single value",()=>{
    const total=expenseTotal([testexp[0]]);
    expect(total).toBe(50);
});

test("testing from expense total with multipal value",()=>{
    const total=expenseTotal(testexp);
    expect(total).toBe(1895);
});