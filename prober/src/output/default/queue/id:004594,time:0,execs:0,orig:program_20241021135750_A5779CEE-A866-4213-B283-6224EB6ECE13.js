function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function f5(a6, a7) {
    a7[Symbol.toStringTag] = f5;
    const o10 = {
        ...a7,
    };
    return o10;
}
const v11 = f5(f5, v4);
const o12 = {
    ...v11,
};
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a15(o12); } catch (e) {}
}
new F13(F13);
gc();
