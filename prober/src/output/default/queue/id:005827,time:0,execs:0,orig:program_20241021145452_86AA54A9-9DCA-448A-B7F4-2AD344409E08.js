const v2 = new BigUint64Array(230);
function f4() {
    v2["toSorted"]();
}
Uint32Array[Symbol.toPrimitive] = f4;
("-52780").search(Uint32Array);
gc();
