function f0() {
    return f0;
}
const o1 = {
};
function f2() {
    return f2;
}
o1.set = f2;
const v4 = new Proxy(f0, o1);
v4[Symbol.toPrimitive] = f0;
gc();
