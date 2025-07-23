const v2 = Int32Array.from(Uint8ClampedArray);
for (let v3 = 0; v3 < 5; v3++) {
    const v5 = new Uint32Array();
    function f6(a7, a8) {
        const o13 = {
            o(a10, a11, a12) {
                a11[2124] = a12;
                v5.__proto__ = this;
                return this;
            },
        };
        o13.o(a7, a7);
        return o13;
    }
    f6(f6(v2));
    f6(f6);
}
gc();
