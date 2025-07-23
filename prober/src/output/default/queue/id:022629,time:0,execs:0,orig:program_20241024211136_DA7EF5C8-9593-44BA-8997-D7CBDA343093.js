const v2 = new Uint8ClampedArray(3610);
const o16 = {
    valueOf() {
        try { this.valueOf(this, v2); } catch (e) {}
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        v2[1] >>>= 3610;
    },
};
o16.valueOf();
gc();
