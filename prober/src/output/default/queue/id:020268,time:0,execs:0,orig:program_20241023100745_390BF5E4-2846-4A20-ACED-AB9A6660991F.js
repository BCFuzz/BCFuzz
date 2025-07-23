const v2 = Array(Array).__proto__;
const o11 = {
    n(a4, a5, a6) {
        const v8 = new Uint8Array();
        v8.copyWithin(a6, v2, a5).set(v2);
        return a4;
    },
};
o11.n(v2);
gc();
