function f0() {
    return f0;
}
const o1 = {
};
const v3 = new Proxy(f0, o1);
v3 instanceof f0;
gc();
