function f2(a3, a4) {
    return -9007199254740990;
}
Uint16Array[Symbol.toPrimitive] = f2;
const v7 = new Uint16Array(Symbol, -9007199254740990, -9007199254740990);
v7.sort(f2).subarray(Uint16Array);
gc();
