function f0(a1) {
    const o8 = {
        valueOf(a3) {
            const v5 = new Uint8Array(a1, a1, a3);
            v5.subarray();
            v5.set(this);
            return v5;
        },
    };
    return o8;
}
class C9 extends f0 {
}
const v10 = new C9();
v10.valueOf();
gc();
