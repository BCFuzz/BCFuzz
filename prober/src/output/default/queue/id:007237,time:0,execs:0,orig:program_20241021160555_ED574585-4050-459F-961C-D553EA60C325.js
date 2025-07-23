for (let v0 = 0; v0 < 50; v0++) {
    const v3 = new Uint32Array();
    function f4(a5, a6) {
        const o11 = {
            o(a8, a9, a10) {
                a9[2124] = a10;
                v3.__proto__ = this;
            },
        };
        o11.o(a5, a5);
        return o11;
    }
    f4(f4(Float32Array));
    f4(f4);
}
gc();
