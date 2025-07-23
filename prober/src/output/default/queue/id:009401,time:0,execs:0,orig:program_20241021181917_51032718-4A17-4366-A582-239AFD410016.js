const v1 = new Int8Array();
function f2(a3, a4) {
    return f2;
}
function f5(a6, a7) {
}
f2[Symbol.species] = f5;
const v11 = v1["reverse"]();
Object.defineProperty(v11, "constructor", { writable: true, value: f2 });
try { v11.subarray(); } catch (e) {}
gc();
