function f2(a3) {
    const t1 = createGlobalObject().WebAssembly.Module;
    new t1(a3);
    return createGlobalObject;
}
BigInt64Array.toString = f2;
class C9 extends BigInt64Array {
}
try { C9.toString(); } catch (e) {}
try { C9.toString(245733465n); } catch (e) {}
gc();
