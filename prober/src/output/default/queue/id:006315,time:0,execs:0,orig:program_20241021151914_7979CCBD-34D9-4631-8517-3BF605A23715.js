class C1 {
}
class C2 extends C1 {
}
const v3 = new C2();
for (let i = 0; i < 100; i++) {
    function f8(a9, a10, a11, a12) {
        const o13 = {
            "c": "o",
            1000: 2,
            [a12]: "m",
            [a11]: undefined,
            50: 1073741825,
            1470772876: v3,
            "e": a12,
            __proto__: a11,
            0: 2,
            "b": a12,
        };
        return o13;
    }
    f8(2, "o", f8());
}
gc();
