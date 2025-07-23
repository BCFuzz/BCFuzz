const v2 = new BigInt64Array(3710);
const v4 = new BigUint64Array(3710, 3710, 3710);
const v5 = v4.constructor;
function f6(a7, a8, a9, a10) {
    return a9;
}
f6[Symbol.species] = v5;
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    a15.constructor = f6;
    a15.slice();
}
new F13(v2);
gc();
