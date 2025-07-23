const v1 = new Int16Array(Int16Array);
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        const v21 = new SharedArrayBuffer(3614);
        const v23 = new Int32Array();
        function f24(a25) {
            const v28 = new ArrayBuffer(9, v21);
            const v30 = new DataView(v28);
            for (let i34 = 0, i35 = 10 + 10; i35--, i34 < i35;) {
                v30.getInt32(i34);
                for (let v43 = 0; v43 < 25; v43++) {
                }
            }
            return i4;
        }
        v23.toString = f24;
        v23 < v1;
        for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
        }
        i5--;
    })()) {
}
gc();
