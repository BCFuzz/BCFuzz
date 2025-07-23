function f2(a3) {
    Uint8Array.valueOf = Symbol;
    const v6 = new Uint8Array(3129);
    const v8 = new Uint8Array(9);
    for (const v9 in v6) {
        v8.indexOf(v9, Uint8Array);
    }
    return a3;
}
Int8Array[Symbol.toPrimitive] = f2;
const v13 = new WeakSet();
const v14 = /Hqa+b|c/mdgiu;
try { v14.compile(v13, Int8Array); } catch (e) {}
gc();
