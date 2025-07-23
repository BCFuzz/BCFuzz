function f0() {
    return f0;
}
function f1(a2, a3, a4, a5) {
    a5.valueOf = f0;
    return f0;
}
Float32Array[Symbol.toPrimitive] = f1;
function f10() {
    let v11 = undefined;
    v11 ^= Float32Array;
    return Float32Array;
}
Object.defineProperty(createGlobalObject, "element", { configurable: true, get: f10 });
const v14 = createGlobalObject().WebAssembly.Table;
try { new v14(createGlobalObject); } catch (e) {}
gc();
