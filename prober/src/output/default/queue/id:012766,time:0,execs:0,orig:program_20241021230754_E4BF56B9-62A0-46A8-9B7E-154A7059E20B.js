function f1() {
    return f1;
}
function f2(a3, a4) {
    return -536870912;
}
f1.toString = f2;
const v5 = [303537114,-4294967297,1000];
const v6 = [-1,9,4294967296,65536,10,49592,10];
const v8 = [f1];
Reflect.apply(v5.sort, v6, v8);
gc();
