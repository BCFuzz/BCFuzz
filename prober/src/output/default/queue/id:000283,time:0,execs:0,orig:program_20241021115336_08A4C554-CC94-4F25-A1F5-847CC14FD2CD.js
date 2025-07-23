function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = F0 < 10;
v3 ** v3;
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
const v8 = new F5();
const v10 = new Set();
const v13 = new Int8Array(255);
for (const v14 in v13) {
}
v7[v8] = v10;
gc();
