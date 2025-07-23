const v0 = /a[bc]d/mgiu;
const v1 = /\xe2\x81\xa3/mgisu;
const v2 = /l?/dgsu;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.test(a5);
}
new F3(v1, v2);
new F3(v1, v1);
new F3(v0, v2);
const v13 = new Uint8ClampedArray(2502);
for (const v14 in v13) {
}
gc();
