const v0 = `
    /\u{12345}/myvis;
    function f2() {
        async function f3(a4, a5) {
            return f2;
        }
        return f2;
    }
`;
eval(v0);
gc();
