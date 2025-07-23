const v1 = /0H3x/mgs;
Object.defineProperty(v1, "parameters", { configurable: true, enumerable: true, value: 1617816776n });
function f3(a4) {
    const t3 = createGlobalObject().WebAssembly.Tag;
    const v9 = new t3(v1);
    return v9;
}
BigInt64Array.toString = f3;
class C10 extends BigInt64Array {
}
const v11 = new C10();
try { v11.slice(v11, BigInt64Array); } catch (e) {}
gc();
