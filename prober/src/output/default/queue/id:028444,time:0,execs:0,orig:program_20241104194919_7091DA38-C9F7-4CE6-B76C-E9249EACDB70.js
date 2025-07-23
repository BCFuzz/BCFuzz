function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = [-507126209,-507126209,-507126209];
const v5 = `
    -507126209 * v4;
    let {"c":v7,"f":v8,} = v2;
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        class C13 {
            static n(a15, a16) {
                const v18 = URIError(a16);
                eval(v18 + v18);
            }
        }
        try { C13.n(v5, v5); } catch (e) {}
    }
    new F9();
`;
eval(v5);
gc();
