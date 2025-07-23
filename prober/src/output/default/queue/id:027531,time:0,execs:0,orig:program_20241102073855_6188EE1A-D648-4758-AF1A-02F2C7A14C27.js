const v1 = [-507126209];
const v2 = `
    -507126209 * v1;
    let v4 = "1000";
    v4 = v2;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
            static n(a11, a12) {
                const v14 = URIError(a12);
                eval(v14 + v14);
            }
        }
        try { C9.n(v2, v2); } catch (e) {}
    }
    new F5(F5, v4);
`;
eval(v2);
gc();
