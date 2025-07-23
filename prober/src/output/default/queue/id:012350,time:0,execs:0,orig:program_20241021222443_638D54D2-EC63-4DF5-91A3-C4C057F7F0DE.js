function f0() {
    return f0;
}
class C1 {
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o12 = {
};
const v14 = new Proxy(C1, o12);
const o15 = {
};
o15.get = f0;
const v16 = new Proxy(v14, o15);
try { new v16(v16, o12); } catch (e) {}
gc();
