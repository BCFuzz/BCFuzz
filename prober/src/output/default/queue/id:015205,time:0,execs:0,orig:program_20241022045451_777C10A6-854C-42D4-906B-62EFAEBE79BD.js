function f0(a1, a2, a3, a4) {
    const o21 = {
        toString(a6, a7) {
            class C9 extends Uint16Array {
                constructor(a11, a12) {
                    super();
                    function f13(a14, a15, a16) {
                        try { a15(); } catch (e) {}
                        a14.e = a14;
                        try { a16.flatMap(); } catch (e) {}
                        return a3;
                    }
                    f13(f13, f13);
                }
            }
            new C9();
        },
    };
    o21.toString();
    return o21;
}
let v23 = f0();
for (let i = 0; i < 5; i++) {
    v23 *= f0();
}
gc();
