function f0() {
}
const o1 = {
};
const o2 = {
    "set": f0,
};
const v4 = new Proxy(o1, o2);
v4.a = v4;
gc();
