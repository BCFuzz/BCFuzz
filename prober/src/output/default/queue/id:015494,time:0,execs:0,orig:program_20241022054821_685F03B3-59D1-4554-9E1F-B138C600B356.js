function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
let v4 = "setFloat32";
const o11 = {
    n(a6, a7) {
        try { this.n(a7, v3); } catch (e) {}
        v4 = this;
        Symbol.toPrimitive;
        return v3;
    },
};
function f12(a13, a14) {
    a13.n();
    const o18 = {
        get a() {
            return this.n();
        },
        __proto__: a13,
        ...v4,
    };
    return o18;
}
f12(f12(o11));
gc();
