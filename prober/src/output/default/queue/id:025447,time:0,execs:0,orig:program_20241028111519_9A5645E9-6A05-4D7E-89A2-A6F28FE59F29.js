const v0 = `
    function f1() {
        const o6 = {
            finally(a3, a4, a5) {
                return f1;
            },
        };
        return o6;
    }
    /\u{12345}/myvis;
`;
eval(v0);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
