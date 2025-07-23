const v0 = [64,-1744041127,-9007199254740991,1073741825,-65535,799113847];
const v1 = `
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F2(F2, F2, F2, F2);
    let v9 = "keys";
    v0[v9]();
    v9 = v8;
`;
eval(v1);
for (let i15 = 10, i16 = 10; -13369 < i16; i16--) {
}
gc();
