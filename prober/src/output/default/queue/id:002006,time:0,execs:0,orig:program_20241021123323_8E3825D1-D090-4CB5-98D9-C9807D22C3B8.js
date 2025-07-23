const o0 = {
};
function f1() {
    return f1;
}
function f2(a3) {
    return a3;
}
Object.defineProperty(o0, "toString", { configurable: true, enumerable: true, get: f1, set: f2 });
try { ("n").fontcolor(o0); } catch (e) {}
gc();
