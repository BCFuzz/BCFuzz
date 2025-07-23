const v2 = [15,15];
const v3 = `
    let v4 = -507126209 * v2;
    v4 >>= 15;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
            static n(a11, a12) {
                const v14 = URIError(a12);
                eval(v14 + v14);
            }
        }
        C9.n(v3, v3);
    }
    try { new F5(v4, F5); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v3);
gc();
