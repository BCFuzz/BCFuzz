function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2 != v2;
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
const v15 = [v3];
const o16 = {
};
o16.toJSON = v15;
const v18 = Date();
const o19 = {
    [Math]: v18,
    "h": o16,
};
JSON.stringify(o19);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
