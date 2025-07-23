const v0 = `
    let v1 = 0;
    do {
        v1++;
    } while ((() => {
            const v4 = \`
                class C5 {
                }
                function F6() {
                    if (!new.target) { throw 'must be called with new'; }
                    this.h = 9223372036854775807;
                }
                F6();
                class C10 extends F6 {
                    static #m(a12) {
                        [-1e-15];
                    }
                    static #n(a15, a16) {
                        function f17() {
                            return a15;
                        }
                    }
                }
                function F18(a20, a21, a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f24() {
                    return C10;
                }
                class C25 extends f24 {
                }
            \`;
            eval();
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return v1 < 2;
        })())
`;
eval(v0);
gc();
