let v0 = "string";
const v2 = `
    v0 /= v2;
`;
const v3 = v2.split(3);
const v4 = [1000000000.0,0.3552851970590143,-679035.3886263893,-6.337287128300744,263251.887041718,506286.3396203404,850017.072701849,-1000.0,0.536135893458491];
function f5(a6, a7, a8) {
}
const v9 = f5();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    try { a15.constructor(v3); } catch (e) {}
}
new F10(v4, f5, v9, F10);
gc();
