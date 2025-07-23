const v2 = new Float64Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F4();
function f12(a13) {
    const o14 = {
        [a13]: 1,
        61: a13,
        "e": 14,
        2: Float64Array,
        "f": 1,
        "a": 536870887,
        "g": a13,
        "b": a13,
        [536870887]: v8,
        [10000]: "c",
        "d": a13,
        "h": a13,
        "f": a13,
        "c": v2,
        "b": 10000,
    };
}
f12();
f12(536870887);
f12(10000);
for (let i20 = 0, i21 = 10;
    i21--, i20 < i21;
    (() => {
        for (let v26 = 0; v26 < 25; v26++) {
            f12();
        }
    })()) {
}
gc();
