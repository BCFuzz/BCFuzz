const v1 = `
    let {...v3} = \`ejZ8h\`;
`;
const v4 = v1.split(3);
const v5 = [1000000000.0,0.3552851970590143,-679035.3886263893,-6.337287128300744,263251.887041718,506286.3396203404,850017.072701849,-1000.0,0.536135893458491];
function f6(a7, a8, a9) {
    return a8;
}
const v10 = f6(3, v5, v4);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v4); } catch (e) {}
}
new F11(v5, f6, v10, F11);
gc();
