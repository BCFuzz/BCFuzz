function f1() {
    return "9007199254740991";
}
function f2() {
    return f1;
}
f2.toString = f1;
const v6 = new Int16Array([f2,f2,f2,f2,f2,f1]);
v6["sort"](Number);
gc();
