for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C11 {
    constructor(a13, a14) {
        class C15 {
            #toString(a17) {
                const t6 = this.constructor;
                new t6();
                for (let v20 = 0; v20 < 100; v20++) {
                    eval();
                }
            }
            constructor(a23) {
                try {
                    a23.#toString();
                } catch(e25) {
                }
            }
        }
        const v26 = new C15();
        const t20 = v26.constructor;
        new t20(v26);
    }
}
new C11();
new C11(C11, eval);
gc();
