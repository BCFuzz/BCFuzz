function f2(a3) {
    Int8Array.lastChunkHandling = a3;
    Uint8Array.fromBase64("valueOf", Int8Array);
    return BigInt64Array;
}
BigInt64Array[Symbol.toPrimitive] = f2;
const v9 = new BigInt64Array();
const v12 = RegExp.bind(v9, 2.220446049250313e-16, BigInt64Array);
try { v12(2.220446049250313e-16, Symbol, Symbol, Symbol, 2.220446049250313e-16); } catch (e) {}
gc();
