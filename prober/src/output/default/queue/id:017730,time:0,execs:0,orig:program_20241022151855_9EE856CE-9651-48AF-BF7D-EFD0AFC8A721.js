const o0 = {
};
function f1() {
    for (let i = 0; i < 5; i++) {
        const o4 = {
            "maxByteLength": 4294967296,
        };
        const v6 = new ArrayBuffer(251, o4);
        const v8 = new Int16Array(v6);
        v8.byteLength;
        for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
        }
    }
}
o0[Symbol.toPrimitive] = f1;
class C22 {
    [o0];
}
gc();
