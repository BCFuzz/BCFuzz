const v2 = new Int8Array();
const v9 = Int32Array.from(v2);
for (let v10 = 0; v10 < 5; v10++) {
    function f12(a13, a14) {
        const o19 = {
            o(a16, a17, a18) {
                a17[2124] = v10;
                return v2;
            },
        };
        o19.o(a13, a13);
        return o19;
    }
    f12(f12(v9));
    f12(f12);
}
gc();
