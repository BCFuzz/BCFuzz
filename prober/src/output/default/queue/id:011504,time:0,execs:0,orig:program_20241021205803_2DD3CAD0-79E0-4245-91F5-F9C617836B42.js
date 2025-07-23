const v0 = `
    const v1 = /\u{12345}/myvis;
    function f2() {
        function f3(a4) {
            class C6 {
            }
            const v7 = new C6();
            v7[217] **= -1.7387675666316363e+308;
            return v0;
        }
        return f3;
    }
    Object.defineProperty(v1, "toString", { configurable: true, get: f2 });
    v1.toString();
`;
eval(v0);
gc();
