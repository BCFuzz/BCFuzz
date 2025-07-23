const v0 = /a+?r\xed\xa0\x80/dysu;
function f2() {
    return f2;
}
const v4 = Reflect.apply(Date, Date, v0);
const v6 = Reflect.construct(f2, [f2]);
const o9 = {
    "maxByteLength": 5,
};
const v11 = new ArrayBuffer(5, o9);
const v13 = new Int32Array(v11);
v13.subarray(v6, v4)[0];
gc();
