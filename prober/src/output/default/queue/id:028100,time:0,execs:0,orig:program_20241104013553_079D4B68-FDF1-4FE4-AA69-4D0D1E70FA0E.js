const v1 = [-507126209];
const v2 = `
    const v3 = -507126209 * v1;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        class C8 {
            static n(a10, a11) {
                eval(URIError(v3) + this);
            }
        }
        C8.n();
    }
    try { new F4(); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v2);
gc();
