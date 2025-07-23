const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
function f2() {
    for (let v3 = 0; v3 < 5; v3++) {
        Object.defineProperty(SharedArrayBuffer, "prototype", { value: v3 });
    }
    return v1;
}
v1[Symbol.toPrimitive] = f2;
try { new Int32Array(v1, 11, v1); } catch (e) {}
gc();
