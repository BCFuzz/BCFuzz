function f1(a2, a3) {
    return a3;
}
Uint32Array[Symbol.iterator] = f1;
const o6 = {
};
o6.constructor.getOwnPropertySymbols(Uint32Array);
gc();
