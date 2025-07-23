function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        super();
        const o17 = {
            o(a7, a8, a9) {
                const v10 = `
                    class C11 {
                        constructor(a13) {
                            a13.#toString();
                        }
                    }
                `;
                eval(v10);
                return f0;
            },
        };
        o17.o();
    }
    #toString(a20, a21) {
    }
}
new C1();
gc();
