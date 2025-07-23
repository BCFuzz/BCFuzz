function f0() {
    return f0;
}
const v4 = new Int16Array([f0,f0,f0,f0,f0]);
v4["sort"](Array);
gc();
