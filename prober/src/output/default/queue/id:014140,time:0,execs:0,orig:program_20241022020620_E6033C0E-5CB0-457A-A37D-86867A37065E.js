function f2() {
    const o10 = {
        "d": -9223372036854775807,
        ["undefined"]: "5AQfY",
        [-9223372036854775807]: -9223372036854775807,
        ["5AQfY"]: -9223372036854775807,
        get g() {
            return "5AQfY";
        },
        o(a8, a9) {
            return a8;
        },
        "h": -659.7988755342739,
        "b": -1129715076,
        "c": -9223372036854775807,
    };
    return o10;
}
const v11 = f2();
class C12 {
    set h(a14) {
        this.e = this;
        const o15 = {
            "call": f2,
            ...v11,
            ...a14,
        };
    }
}
const v16 = new C12();
v16.h = v16;
gc();
