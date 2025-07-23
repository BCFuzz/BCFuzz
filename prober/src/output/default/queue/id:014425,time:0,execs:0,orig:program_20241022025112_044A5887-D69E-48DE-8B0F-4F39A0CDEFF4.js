const v0 = [];
function f1() {
    return v0;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v0, 2147483647, { configurable: true, set: f1 });
    v0.length = 9;
}
new F2(v0, v0, v0);
new Uint8Array(v0);
for (let i13 = -3, i14 = 10; i13 < i14; i14--) {
    for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
    }
}
gc();
