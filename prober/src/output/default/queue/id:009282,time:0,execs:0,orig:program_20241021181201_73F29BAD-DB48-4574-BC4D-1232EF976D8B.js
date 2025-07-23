function f0() {
    return f0;
}
const v1 = [f0,f0,f0,f0];
const v2 = `
    const v4 = Array?.apply;
    try { v4(f0); } catch (e) {}
    function f6() {
        [6,-1762423995,9007199254740991,-54677,-34760,-9,257];
        function f8() {
            return f6;
        }
        return Array;
    }
    f6?.apply;
    const v10 = v1.length;
    v10 << v10;
    function f12(a13, a14, a15, a16) {
        const o20 = {
            toString(a18, a19) {
                return a14;
            },
        };
        return v10;
    }
    const v22 = /\u{12345}/myvis.global;
    v22 && v22;
`;
eval(v2);
gc();
