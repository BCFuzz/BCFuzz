const v0 = `
    async function* f1(a2, a3) {
        const v4 = [-2.114342208625814,2.2250738585072014e-308,1000.0,2.0,0.0,-702.8506818277738,-1000000000.0,7.545528789607797,-4.898188015893227];
        const v6 = v4.entries().__defineSetter__;
        function f7() {
            return v4 instanceof v6;
        }
        try { f7(); } catch (e) {}
        return f1;
    }
    f1(f1, v0);
`;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    for (let i23 = -2, i24 = 10; i23 < i24; i24--) {
    }
}
eval(v0).next();
gc();
