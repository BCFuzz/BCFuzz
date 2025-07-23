const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
                try {
                    function F24(a26, a27, a28, a29) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v30 = F24(i6, i16, i17, a3);
                    const v31 = [-1.1404426593387361e+308,336421.1868685689,2.0,-1.7976931348623157e+308,0.7545170436722216];
                    function f32() {
                        return v30;
                    }
                    if (i16 in v31) {
                        continue;
                    }
                } catch(e34) {
                }
            }
        }
        return f1;
    }
    f1(f1, f1);
`;
const v37 = eval(v0);
v37.next(v37, v37);
gc();
