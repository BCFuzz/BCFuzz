const v0 = [1.6559194767304183e+308,-1000000000.0,-938351.4622696445,-1e-15,-3.0,93.3748133525171,0.6862807330714926,-7.09858645445139e+307,-251.31202512159143];
const v2 = `
    do {
    } while ((() => {
            const v5 = 0 < 9;
            function f6(a7, a8) {
            }
            return v5;
        })())
`;
const v9 = v2.split(8);
const v10 = [2.0,-4.0];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v9); } catch (e) {}
}
new F12(v10, v0, undefined, F12);
gc();
