let v0 = "getPrototypeOf";
const v1 = `
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        for (let i14 = 0, i15 = 10;
            (() => {
                const v16 = i14 < i15;
                const v17 = v0.slice(i4, i15);
                function F18(a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F18(v17);
                return v16;
            })();
            i15--) {
        }
    }
`;
v0 = v1;
eval(v1);
gc();
