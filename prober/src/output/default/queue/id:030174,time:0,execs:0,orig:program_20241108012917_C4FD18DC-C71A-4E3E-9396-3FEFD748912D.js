function f1() {
    f1 -= f1;
    let v2 = f1--;
    v2--;
    return v2;
}
const v4 = [536870912n,f1];
const t7 = eval(v4.toLocaleString(f1, v4));
t7();
gc();
