let v0 = 10;
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(F1, F1, v0, v0);
function f9() {
    let v10 = `127`;
    ({"a":f9,"b":v10,"e":v10,...v0} = v7);
    return v10;
}
const t10 = eval(([536870912n,f9]).toLocaleString());
t10();
for (let i18 = -3, i19 = 10; i18 < i19; i19--) {
}
gc();
