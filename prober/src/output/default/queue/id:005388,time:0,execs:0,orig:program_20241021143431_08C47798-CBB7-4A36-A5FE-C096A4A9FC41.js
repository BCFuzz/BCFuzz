const v2 = new WeakMap();
((255 ^ v2) * 255) / v2;
const v6 = `
    let v7 = -50716;
    for (let v8 = 0; v8 < 5; v8++) {
        function F9() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F9();
        for (let v12 = 0; v12 < 5; v12++) {
        }
    }
    class C13 {
        static p(a15, a16, a17) {
            class C19 extends Date {
            }
            for (let i = 0; i < 5; i++) {
                const v20 = [-1.0,2.220446049250313e-16,2.2250738585072014e-308,-2.2250738585072014e-308,-779.5863897872301,0.0];
                class C21 {
                    static n(a23, a24, a25, a26) {
                        Date["UTC"](a16);
                    }
                    constructor(a30, a31) {
                        for (let v32 = 0; v32 < 50; v32++) {
                            super[v20];
                        }
                        try {
                        } catch(e34) {
                        }
                    }
                }
                function f35(a36) {
                }
            }
        }
    }
    const v37 = ++v7;
    new Uint8ClampedArray();
    for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
        function F50() {
            if (!new.target) { throw 'must be called with new'; }
            function f52(a53, a54, a55) {
                const o56 = {
                };
            }
        }
        const v57 = new F50();
        v57.constructor;
    }
    -v37;
`;
eval(v6);
gc();
