function f2() {
    return f2;
}
const v3 = [-4294967297];
function f4() {
    return Uint8Array(v3, -4294967297, -4294967297);
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v3, "roundingMode", { configurable: true, get: f4, set: f7 });
const v9 = [f2,f2,f2,v3];
try { v9.toLocaleString(-2.5791223860514156, v3); } catch (e) {}
gc();
