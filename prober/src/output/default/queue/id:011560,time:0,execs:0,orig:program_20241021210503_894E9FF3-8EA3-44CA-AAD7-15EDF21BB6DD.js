const v1 = Symbol.constructor;
function f2(a3, a4) {
    return a4;
}
Object.defineProperty(v1, 0, { enumerable: true, get: f2, set: f2 });
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
function f16(a17, a18) {
    return Symbol;
}
Uint32Array[Symbol.iterator] = f16;
const o20 = {
};
o20.constructor.getOwnPropertySymbols(Uint32Array);
gc();
