class C0 {
    constructor(a2) {
        class C3 {
        }
        for (let i6 = 0, i7 = 127;
            i6 < i7;
            (() => {
                i7--;
                class C12 extends C3 {
                }
                const v13 = new C12();
                function f14(a15, a16) {
                    a15.toString(C3, a16, a2);
                    C3 = C12;
                    return v13;
                }
                v13.constructor = f14;
                const v18 = v13.constructor;
                const v19 = v18(v18);
                v19.constructor(v19);
            })()) {
        }
    }
}
const v23 = new C0(C0);
new C0(v23);
gc();
