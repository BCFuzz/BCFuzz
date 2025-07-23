const v0 = [];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Uint8Array(a5, a4, a6);
    const v9 = [-268435456,-9007199254740992,36357,-1869956780,-2147483648,-12452];
    for (const v10 in v9) {
        v10 in v8;
    }
    const v12 = new Uint8Array(v9, a4);
    for (const v13 in v12) {
        v13 in v0;
    }
}
new F1();
gc();
