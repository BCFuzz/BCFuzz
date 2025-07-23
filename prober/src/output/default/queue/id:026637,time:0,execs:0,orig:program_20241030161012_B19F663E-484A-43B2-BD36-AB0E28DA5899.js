const v1 = [-10,-10,-10];
const v2 = `
    const v3 = /1abc|def|ghi\ud808\udf45*xyz{0,1}/mdyiu;
    function f4() {
        return v3;
    }
    const v5 = f4 + -10;
    const v7 = [v1,904623.0599490013];
    try { v7.toLocaleString(v5); } catch (e) {}
`;
eval(v2);
gc();
