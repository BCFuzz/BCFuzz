function f1(a2, a3) {
    const o6 = {
        "maxByteLength": 1073741824,
    };
    const v8 = new SharedArrayBuffer(3, o6);
    const v10 = new BigUint64Array(v8);
    v10.sort(SharedArrayBuffer);
}
Uint16Array[Symbol.toPrimitive] = f1;
Uint16Array + Uint16Array;
gc();
