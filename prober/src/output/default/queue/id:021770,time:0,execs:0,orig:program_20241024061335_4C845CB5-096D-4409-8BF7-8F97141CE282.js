function f1() {
    return Reflect;
}
const v3 = new Proxy(f1, Reflect);
const o4 = {
    ...v3,
};
gc();
