let v1 = "setFloat32";
const o7 = {
    n(a3, a4) {
        v1 = this;
        this[Symbol.toPrimitive] = "valueOf";
        return a3;
    },
};
function f8(a9, a10) {
    a9.n();
    const o15 = {
        get a() {
            return f8;
        },
        __proto__: a9,
        ...v1,
        set a(a14) {
        },
    };
    return o15;
}
f8(f8(o7));
gc();
