function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        super();
        const o18 = {
            o(a7, a8, a9) {
                const v10 = `
                    class C11 {
                        constructor(a13) {
                            a13.#toString();
                        }
                    }
                    /\u{12345}/myvis;
                `;
                return eval(v10);
            },
        };
        o18.o(this, C1, C1, C1);
    }
    #toString(a21, a22) {
    }
}
new C1();
gc();
