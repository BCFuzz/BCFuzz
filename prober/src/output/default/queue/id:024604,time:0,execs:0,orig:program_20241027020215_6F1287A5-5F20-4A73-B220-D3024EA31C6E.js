const v3 = new Int16Array(3610);
const o17 = {
    valueOf() {
        try { this.valueOf(512); } catch (e) {}
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        v3[1] >>>= 512;
        return v3;
    },
};
o17.valueOf(v3, 3610, o17);
gc();
