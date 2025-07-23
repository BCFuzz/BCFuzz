for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
}
const v21 = Array(Array);
function f22() {
    return ArrayBuffer(v21, Array);
}
function f25(a26) {
    return a26;
}
Object.defineProperty(v21, "set", { configurable: true, get: f22, set: f25 });
const v27 = [4294967296,-1507112381];
function f28() {
    return v21;
}
const o29 = {
    "getOwnPropertyDescriptor": f28,
};
const v31 = new Proxy(v27, o29);
try { v31.reverse(); } catch (e) {}
gc();
