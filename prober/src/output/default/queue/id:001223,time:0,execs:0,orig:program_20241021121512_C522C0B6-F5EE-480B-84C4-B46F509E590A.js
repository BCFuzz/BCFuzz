function f0() {
    return f0;
}
const o1 = {
};
const v3 = new Proxy(f0, o1);
new v3();
gc();
