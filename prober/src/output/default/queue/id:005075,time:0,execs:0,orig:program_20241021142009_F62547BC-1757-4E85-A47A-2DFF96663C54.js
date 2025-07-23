let v0 = 817062.6406615518;
const v1 = [1826,995047231,10,1,1630958945,-65535,-65535];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o8 = {
        "maxByteLength": 268435456,
    };
    const v10 = new SharedArrayBuffer(0, o8);
    const v12 = [v0];
    Reflect.apply(v10.grow, v10, v12);
}
new F2(F2, F2);
for (let v16 = 0; v16 < 5; v16++) {
    ({"g":v0,"length":v16,} = v1);
}
new F2();
gc();
