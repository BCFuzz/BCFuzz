const v0 = `
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        for (let i5 = 1.2848147998924302e+308, i6 = 10;
            (() => {
                for (let i9 = -3, i10 = 10; i9 < i10;) {
                }
                /J(?<a>(?<b>(?<c>(?<d>.).).).)a||bc/dyis;
                /i(?<a>.)\k<a>[\c~]?/mygi;
                return i5 < i6;
            })();
            ) {
        }
    }
    const o23 = {
    };
    o23.toString().search(F2);
`;
eval(v0);
gc();
