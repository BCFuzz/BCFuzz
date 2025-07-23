const v0 = [1336035036,-5326,-1,-2,268435441,10,36374,65536,-795621297,8];
const v2 = `
    let v4 = Uint8Array();
    for (let v5 = 0; v5 < 5; v5++) {
        ({"b":v5,"length":v4,...v5} = v0);
    }
`;
const v6 = v2.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return a9;
}
const v12 = f8(v0, v0, v6);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v6); } catch (e) {}
}
new F13(v7, f8, v12, F13);
gc();
