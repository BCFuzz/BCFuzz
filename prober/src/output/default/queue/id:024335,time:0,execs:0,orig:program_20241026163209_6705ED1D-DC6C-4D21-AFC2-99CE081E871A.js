const v0 = /\P{Decimal_Number}/mvgi;
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    const o28 = {
        "maxByteLength": 268435439,
    };
    const v30 = new SharedArrayBuffer(1000, o28);
    const v32 = new Uint16Array(v30, 1000, v0);
    v32.sort(a25);
}
new F21();
gc();
