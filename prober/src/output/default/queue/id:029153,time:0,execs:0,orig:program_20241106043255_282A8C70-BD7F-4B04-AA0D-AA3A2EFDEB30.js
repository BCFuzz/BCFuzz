const v0 = [1073741824];
const o6 = {
    "maxByteLength": 824,
};
const v8 = new ArrayBuffer(19, o6);
const v9 = new Uint16Array(v8, Int16Array, 3);
for (let i13 = 0, i14 = 10;
    (() => {
        v8.resize();
        v9[128] = v0;
        return Reflect.construct(Int32Array, [ArrayBuffer]) < i14;
    })();
    ) {
    i14--;
}
gc();
