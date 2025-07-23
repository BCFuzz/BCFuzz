const v1 = `
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F2(Uint16Array);
    const o9 = {
    };
    /\u{12345}/myvis;
    function f11(a12, a13) {
        function f14(a15, a16, a17, a18) {
            return a13;
        }
        return a12;
    }
`;
function F19(a21) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 10; i++) {
        const o27 = {
            set b(a23) {
                ("p" + a23).replace(v1, "p");
            },
        };
        o27.b = this;
    }
}
new F19(Uint16Array);
gc();
