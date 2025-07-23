const v1 = ["14143"];
const v2 = `
    "14143" * v1;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        class C8 {
            static n(a10, a11) {
                const v13 = URIError(a11);
                eval(v13 + v13);
            }
        }
        try { C8.n(v2, v2); } catch (e) {}
    }
    const v18 = \`
        /1abc|def|ghi\ud808\udf45*xyz{0,1}/mdyiu;
    \`;
    new F4();
`;
eval(v2);
gc();
