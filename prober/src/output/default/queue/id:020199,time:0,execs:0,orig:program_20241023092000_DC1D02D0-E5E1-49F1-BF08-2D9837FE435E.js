function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5, a6) {
    for (let i = 0; i < 5; i++) {
        v2[a4];
    }
    return arguments;
}
const v11 = new BigUint64Array(586);
for (const v12 of v11) {
    f3();
}
gc();
