function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
function f10(a11) {
    const o12 = {
        [a11]: 1,
        "a": 536870887,
        "g": a11,
        2305: "AtD",
        "b": a11,
        [536870887]: v6,
        [10000]: "c",
        "b": 10000,
        "e": a11,
        "f": 1,
    };
    return v6;
}
f10();
f10(536870887);
f10(10000);
for (let i18 = 0, i19 = 10;
    i19--, i18 < i19;
    (() => {
        for (let v24 = 0; v24 < 25; v24++) {
            f10();
        }
    })()) {
}
gc();
