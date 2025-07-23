function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8, a9, a10) {
    Object.defineProperty(arguments, 2, { enumerable: true, get: f0 });
    return arguments;
}
f7(F1)[2];
gc();
