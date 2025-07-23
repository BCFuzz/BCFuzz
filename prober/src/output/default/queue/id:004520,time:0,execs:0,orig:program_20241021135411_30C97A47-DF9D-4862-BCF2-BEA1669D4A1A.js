function f0() {
    return f0;
}
const o1 = {
};
const v3 = new Proxy(f0, o1);
v3[Symbol.toPrimitive] = f0;
gc();
