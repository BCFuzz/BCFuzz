let v0 = "setFloat32";
const o6 = {
    n(a2, a3) {
        v0 = this;
        super.d = Symbol.toPrimitive;
        return a2;
    },
};
function f7(a8, a9) {
    a8.n();
    const o13 = {
        ...v0,
        set a(a12) {
        },
    };
    return o13;
}
f7(f7(o6));
gc();
