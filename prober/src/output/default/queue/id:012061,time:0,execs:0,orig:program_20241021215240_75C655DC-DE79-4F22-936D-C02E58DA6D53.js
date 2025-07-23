function f0() {
    for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
    }
    const o16 = {
        ["unregister"](a14, a15) {
        },
        "c": f0,
        "a": 3,
    };
    return o16;
}
const v17 = f0();
function f18(a19, a20) {
    return a19;
}
const v21 = f18(f18, v17);
const v22 = f18(v21, f18);
function f23(a24, a25, a26) {
    const o34 = {
        ...a24,
        "h": a24,
        [a25]: a25,
        "f": a26,
        "d": a25,
        [a26]: a26,
        toString(a28, a29, a30) {
            return JSON["stringify"](this);
        },
    };
    return o34;
}
f23(f0, v22, f23(v17, v21, f0));
gc();
