const v1 = new BigUint64Array();
function f2(a3, a4) {
    const v6 = createGlobalObject();
    const v7 = v6.Float16Array;
    const v8 = new v7(a4, v7, v7, v1, v6);
    v8.constructor = BigUint64Array;
    v8.subarray(a3, f2, a4, v1, v7);
    return v7;
}
Object.defineProperty(v1, "toString", { configurable: true, enumerable: true, value: f2 });
const v11 = Int8Array.constructor;
try { v11(v1); } catch (e) {}
gc();
