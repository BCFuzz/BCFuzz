const v0 = [-5.0,1.3528388846609236e+308];
function f1() {
    return 1000000000.0;
}
v0[Symbol.toPrimitive] = f1;
for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
    createGlobalObject().Atomics.isLockFree(v0);
}
gc();
