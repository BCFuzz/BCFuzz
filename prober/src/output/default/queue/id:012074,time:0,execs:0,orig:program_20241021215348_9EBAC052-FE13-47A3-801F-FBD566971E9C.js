function f1(a2) {
    const v5 = createGlobalObject().WebAssembly;
    const v6 = v5.Tag;
    v6(v5, BigInt64Array, v6, v6, a2);
    return BigInt64Array;
}
BigInt64Array.toString = f1;
class C8 extends BigInt64Array {
}
const v9 = new C8();
try { v9.slice(v9, BigInt64Array); } catch (e) {}
gc();
