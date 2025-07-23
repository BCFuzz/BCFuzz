function f1() {
    eval();
    return f1;
}
const t4 = eval(([[536870912n,f1]]).toLocaleString());
t4();
gc();
