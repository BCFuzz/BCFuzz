function f0() {
    return f0;
}
function f1(a2, a3) {
    return f0;
}
f0[Symbol.species] = f1;
const v6 = [-4];
Object.defineProperty(v6, "constructor", { writable: true, configurable: true, value: f0 });
try { v6.splice(v6); } catch (e) {}
gc();
