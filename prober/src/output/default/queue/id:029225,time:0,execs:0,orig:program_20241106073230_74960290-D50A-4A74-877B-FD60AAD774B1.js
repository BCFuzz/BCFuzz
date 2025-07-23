function f1() {
    f1 = EvalError;
    return 536870912n;
}
const t4 = eval(([[536870912n,f1]]).toLocaleString());
t4();
gc();
