function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(F1, "NEGATIVE_INFINITY", F1, F1);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v12 in "NEGATIVE_INFINITY") {
        Object.defineProperty(arguments, v12, { get: F1 });
        Object.defineProperty(arguments, 1, { writable: true, configurable: true, enumerable: true, value: undefined });
    }
}
new F8("NEGATIVE_INFINITY", v7);
gc();
