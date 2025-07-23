const v1 = new Uint8ClampedArray();
const v2 = v1.constructor;
const o7 = {
    "maxByteLength": 824,
};
const v9 = new ArrayBuffer(19, o7);
const v10 = new v2(v9, Int16Array, 3);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
for (let i23 = -3, i24 = 10; i23 < i24; i24--) {
}
const v32 = this.constructor;
try { v32.freeze(v10); } catch (e) {}
for (let i36 = 0, i37 = 10;
    (() => {
        i37--;
        for (let i42 = 0, i43 = 10; i43--, 8 < i43;) {
        }
        return i36 < i37;
    })();
    ) {
}
gc();
