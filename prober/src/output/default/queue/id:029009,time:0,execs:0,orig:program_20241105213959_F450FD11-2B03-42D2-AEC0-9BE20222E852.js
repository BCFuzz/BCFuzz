function f1() {
    f1 = eval;
    eval();
    return eval;
}
const t5 = eval(([[536870912n,f1]]).toLocaleString(f1));
t5(f1);
gc();
