function f1() {
    f1 -= f1;
    return 536870912n;
}
const v2 = [536870912n,f1];
const v5 = eval(v2.toLocaleString(f1, v2));
v5(v5, v5, v2);
gc();
