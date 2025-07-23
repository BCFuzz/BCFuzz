function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        for (let v7 = 0; v7 < 5; v7++) {
            const v9 = [C1,C1];
            class C10 {
                #c;
                constructor(a12, a13, a14, a15) {
                    try {
                        v9.#c = 7;
                    } catch(e16) {
                        e16 = a12;
                    }
                }
            }
            new C10();
        }
    }
}
new C1();
new C1();
gc();
