const v1 = new Int16Array();
const v3 = new Int8Array(v1, v1);
function f4(a5, a6) {
    return a6;
}
f4[Symbol.species] = v1;
const v10 = v3["reverse"]();
Object.defineProperty(v10, "constructor", { writable: true, value: f4 });
try { v10.subarray(); } catch (e) {}
gc();
