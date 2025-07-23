for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        return f11;
    }
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        class C18 {
            static n(a20, a21) {
                const v23 = URIError(a21);
                eval(v23 + v23);
            }
            constructor(a28) {
                /\u{12345}/myvis;
            }
        }
        try { C18.n(v10, v10); } catch (e) {}
    }
    new F14(v10, v10);
`;
eval(v10);
gc();
