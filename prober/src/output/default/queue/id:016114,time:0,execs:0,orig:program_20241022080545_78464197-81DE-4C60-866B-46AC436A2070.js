function f1() {
    return 749519875;
}
function f2() {
    return 749519875;
}
f2.toString = f1;
const v6 = new Int16Array([f2,f2,f2,f2,f2]);
v6["sort"](Number);
gc();
