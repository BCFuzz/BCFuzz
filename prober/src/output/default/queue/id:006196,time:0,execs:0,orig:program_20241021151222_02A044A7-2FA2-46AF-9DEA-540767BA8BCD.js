function f0() {
    const o8 = {
        "d": -9223372036854775807,
        ["undefined"]: "5AQfY",
        [-9223372036854775807]: -9223372036854775807,
        ["5AQfY"]: -9223372036854775807,
        get g() {
            return "undefined";
        },
        o(a6, a7) {
            return a7;
        },
    };
    return o8;
}
const v9 = f0();
class C10 {
    set h(a12) {
        const o13 = {
            "call": f0,
            ...v9,
            ...a12,
        };
    }
}
const v14 = new C10();
v14.h = v14;
gc();
