class C3 {
    constructor(a5, a6) {
        function f8(a9, a10, a11, a12) {
            a12[Symbol.toPrimitive] = Symbol;
            const o16 = {
                "c": this,
                [a12]: -1000.0,
                set f(a15) {
                },
                "g": a9,
            };
            function f17(a18) {
                return f17;
            }
            o16.toString = f17;
            return o16;
        }
        const v19 = f8(a6, this, this, this);
        f8(-4294967296, v19, -1000.0, v19);
        f8(a6, -1000.0, 0.19288184099644134, v19);
    }
}
const v22 = new C3(0.19288184099644134, -1000.0);
new C3(v22, -4294967296);
new C3();
class C25 extends C3 {
}
new C25();
gc();
