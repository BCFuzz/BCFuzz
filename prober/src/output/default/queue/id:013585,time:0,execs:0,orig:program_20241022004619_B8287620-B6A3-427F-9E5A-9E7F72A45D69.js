function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    return arguments;
    eval();
}
const v7 = new F0(F0, F0);
v7.length;
v7.constructor;
const v12 = new BigUint64Array(586);
for (const v13 of v12) {
}
gc();
