class C1 {
}
class C2 extends C1 {
}
const v3 = new C2();
for (let i = 0; i < 100; i++) {
    function f8(a9, a10, a11, a12) {
        const o17 = {
            "c": "o",
            1000: 2,
            [a12]: "m",
            [a11]: undefined,
            1470772876: v3,
            "maxByteLength": 2,
            "maxByteLength": 512,
            valueOf(a14, a15, a16) {
                this[a15] = a11;
                return a9;
            },
        };
        return o17;
    }
    f8(2, "o", f8());
}
gc();
