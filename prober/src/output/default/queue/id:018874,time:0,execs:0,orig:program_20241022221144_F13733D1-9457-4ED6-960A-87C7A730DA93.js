function f1() {
    return f1;
}
const v3 = [[536870912n,f1]];
const t4 = eval(v3.toLocaleString(536870912n, v3));
t4();
gc();
