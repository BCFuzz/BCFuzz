const v2 = new Uint32Array();
function f3(a4, a5) {
    const o10 = {
        o(a7, a8, a9) {
            a8[2124] = a9;
            v2.__proto__ = this;
            return a5;
        },
    };
    o10.o(a4, a4);
    return o10;
}
f3(f3(Float32Array));
f3(f3);
gc();
