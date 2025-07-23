const v2 = new Int16Array();
const o16 = {
    valueOf() {
        try { this.valueOf(); } catch (e) {}
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        v2[1] >>>= 512;
        return this;
    },
};
o16.valueOf(512, v2);
gc();
