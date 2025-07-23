function f0() {
}
const v3 = new Int8Array(42, 42, 42);
const o4 = {
};
o4.has = f0;
const v6 = new Proxy(v3, o4);
42 in v6;
gc();
