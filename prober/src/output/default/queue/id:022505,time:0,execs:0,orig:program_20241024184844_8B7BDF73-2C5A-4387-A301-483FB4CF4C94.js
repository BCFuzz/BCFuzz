const v2 = new Int8Array(3610);
const o16 = {
    valueOf() {
        try { this.valueOf(Int8Array); } catch (e) {}
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        v2[1] >>>= 3610;
        return this;
    },
};
o16.valueOf();
gc();
