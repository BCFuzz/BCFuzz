const v2 = ([5.0,5.0,5.0,5.0]).values();
function f3(a4, a5) {
    const o14 = {
        m(a7, a8, a9, a10) {
            return a10;
        },
        "a": v2,
        4: 5.0,
        [a4]: a5,
        p(a12, a13) {
            return f3;
        },
    };
    return o14;
}
class C15 {
}
const v16 = new C15();
v16.constructor = f3;
const v17 = v16.constructor;
const v18 = v17(v16);
function f19() {
    this.b = this;
    delete this.b;
    return v17;
}
const v24 = new Float64Array(1201);
v24.map(f19, v18);
gc();
