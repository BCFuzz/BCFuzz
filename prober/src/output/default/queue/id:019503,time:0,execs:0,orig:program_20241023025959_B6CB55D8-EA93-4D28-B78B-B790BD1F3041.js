const o2 = {
};
function f3() {
    throw 128;
    return o2;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(o2, "construct", { configurable: true, get: f3, set: f4 });
const v7 = new Proxy(WeakMap, o2);
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
try { new v7(f3); } catch (e) {}
gc();
