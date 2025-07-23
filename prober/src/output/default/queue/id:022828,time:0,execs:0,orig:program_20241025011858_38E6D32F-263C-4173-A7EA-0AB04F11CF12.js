function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    a3 |= F0;
    return a4;
}
F0[Symbol.toPrimitive] = f2;
const v7 = [-869297403,3,860842789];
Object.defineProperty(v7, 6, { configurable: true, get: f2 });
try { new Uint8ClampedArray(v7); } catch (e) {}
gc();
