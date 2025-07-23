function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    return f3;
}
Object.defineProperty(v2, Symbol.toStringTag, { get: f3 });
const o6 = {
    [v2]: v2,
};
gc();
