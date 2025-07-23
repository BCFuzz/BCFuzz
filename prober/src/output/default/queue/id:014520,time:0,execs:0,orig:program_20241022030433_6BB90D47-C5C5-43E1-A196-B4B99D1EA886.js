function f2() {
    return Float32Array;
}
class C3 {
}
for (let i5 = 0, i6 = 1024; i5 < i6; i6--) {
}
const o13 = {
};
o13.getOwnPropertyDescriptor = Float32Array;
const v15 = new Proxy(C3, o13);
const o16 = {
};
o16.get = f2;
const v17 = new Proxy(v15, o16);
try { new v17(); } catch (e) {}
gc();
