class C0 {
    constructor(a2, a3) {
        const v4 = `
            let v5 = 0;
            while ((() => {
                    function F7(a9, a10) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    class C11 extends F7 {
                        #toString(a13, a14) {
                        }
                        constructor(a16, a17, a18, a19) {
                            super();
                            try {
                                a18.#toString();
                            } catch(e21) {
                                eval();
                            }
                        }
                    }
                    new C11(F7, C11, F7);
                    return v5 < 5;
                })()) {
                v5++;
            }
            v5 / this;
        `;
        eval(v4);
    }
}
new C0(C0, C0);
gc();
