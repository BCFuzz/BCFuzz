function f0() {
    const o2 = {
        "e": 640.0471621509646,
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
class C5 extends f0 {
    static set e(a7) {
    }
}
C5[Symbol.unscopables] = v3;
with (C5) {
    e = v4;
}
gc();
