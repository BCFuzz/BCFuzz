function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F3(F0, F0);
new BigInt64Array(v7, BigInt64Array);
for (let v10 = 0; v10 < 5; v10++) {
    const v11 = [-9223372036854775807,9007199254740992,-1598820101,15,-11,-1073741824,127,-16,-9223372036854775807,3];
    for (let v12 = 0; v12 < 50; v12++) {
        v12 < 4;
        v11.length ^= v12;
    }
}
gc();
