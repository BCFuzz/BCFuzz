const v0 = `
    const v1 = /\u{12345}/myvis;
    function f2() {
        function f3(a4) {
        }
        return v1;
    }
`;
eval(v0);
gc();
