function f3(a4) {
    Int8Array.alphabet = "o";
    return Uint8Array.fromBase64("valueOf", Int8Array);
}
BigInt64Array[Symbol.toPrimitive] = f3;
const v10 = new BigInt64Array();
const v13 = RegExp.bind(v10, 2.220446049250313e-16, BigInt64Array);
try { v13(); } catch (e) {}
gc();
