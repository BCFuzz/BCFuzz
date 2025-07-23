for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        class C15 {
            static n(a17, a18) {
                const v20 = URIError(a13);
                function f21() {
                    function f22() {
                        new new.target();
                        return a17;
                    }
                    return f22;
                }
                Object.defineProperty(v20, "valueOf", { enumerable: true, get: f21 });
                v20 + v20;
            }
            constructor(a27) {
                /\u{12345}/myvis;
            }
        }
        try { C15.n(); } catch (e) {}
    }
    new F11();
`;
eval(v10);
gc();
