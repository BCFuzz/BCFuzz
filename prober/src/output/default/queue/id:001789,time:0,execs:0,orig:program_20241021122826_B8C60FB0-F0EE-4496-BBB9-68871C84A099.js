function f0() {
    return f0;
}
const v3 = new Int16Array(208);
v3["reduce"](f0, 208);
gc();
