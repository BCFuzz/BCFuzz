function f0(a1, a2, a3) {
    return a1;
}
const v4 = f0.toString;
const o5 = {
};
const v7 = new Proxy(v4, o5);
delete v7.g;
gc();
