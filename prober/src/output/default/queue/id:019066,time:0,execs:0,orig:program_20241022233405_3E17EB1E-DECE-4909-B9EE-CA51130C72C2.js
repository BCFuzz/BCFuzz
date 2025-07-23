const v2 = new Int16Array();
const v4 = new Uint8Array();
const v6 = new Float32Array(v4);
function f7(a8) {
    Object.defineProperty(v4, a8, { writable: true, enumerable: true, value: v2 });
    return Uint8Array;
}
Object.defineProperty(v6, "constructor", { writable: true, value: f7 });
const v9 = v6.constructor;
try { v9(-2147483648); } catch (e) {}
gc();
