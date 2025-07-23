const v2 = new Uint8Array(2147483648);
const o5 = {
    set f(a4) {
        v2.byteLength <<= 2147483648;
    },
};
o5.f = o5;
gc();
