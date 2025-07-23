function f0() {
    return f0;
}
const o1 = {
};
const v3 = new Proxy(f0, o1);
const v5 = new Uint8ClampedArray(v3);
v5.sort(v3);
gc();
