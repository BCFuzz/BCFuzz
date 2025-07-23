function f1(a2, a3) {
    let v4;
    try { v4 = a2(); } catch (e) {}
    const v6 = new Uint8Array();
    v6.constructor = v4;
    v6.slice();
    return Uint8Array;
}
WeakSet[Symbol.iterator] = f1;
try { new Uint32Array(WeakSet); } catch (e) {}
gc();
