const v0 = [];
const o1 = {
    __proto__: v0,
};
function f2() {
    o1(o1, v0, v0, v0);
    return f2;
}
o1.valueOf = f2;
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.length = a6;
}
new F4(o1);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    try { a10.slice(); } catch (e) {}
}
new F8(o1);
gc();
