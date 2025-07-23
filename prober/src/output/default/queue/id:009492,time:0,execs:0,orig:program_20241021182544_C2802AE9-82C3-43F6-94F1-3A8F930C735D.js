function f0() {
    const o9 = {
        1538327311: f0,
        toString(a5, a6) {
            return this;
        },
        "b": 5,
        "h": "65536",
        [f0]: "65536",
        "e": "g",
        valueOf(a8) {
            return 5;
        },
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
function f12(a13) {
    const o16 = {
        ...v10,
        "d": v11,
        set g(a15) {
        },
    };
    return a13;
}
for (let v17 = 0; v17 < 100; v17++) {
    f12(v17);
}
gc();
