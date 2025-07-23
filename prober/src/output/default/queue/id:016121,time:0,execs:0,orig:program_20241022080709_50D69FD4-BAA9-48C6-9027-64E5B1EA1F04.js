function f0(a1, a2) {
    let [] = a2;
    return a1;
}
const v3 = [f0];
Object.defineProperty(v3, "constructor", { configurable: true, value: f0 });
const v4 = v3.constructor;
try { v4(); } catch (e) {}
const v8 = new Uint32Array(1003);
for (const v9 in v8) {
}
gc();
