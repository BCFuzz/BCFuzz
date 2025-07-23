function f1() {
    return 3826;
}
const v3 = new Int16Array(3826);
const o4 = {
    "set": f1,
};
const v6 = new Proxy(v3, o4);
v6[10] = 3826;
gc();
