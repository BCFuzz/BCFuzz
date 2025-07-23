const v0 = [1336035036,-5326,-1,-2,268435441,10,36374,65536,-795621297,8];
const v2 = `
    /\u{12345}/myvis;
    let v5 = Uint8Array();
    for (let v6 = 0; v6 < 5; v6++) {
        ({"b":v6,"length":v5,...v6} = v0);
    }
`;
const v7 = v2.split(8);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return 8;
}
const v13 = f9();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
