const v2 = new Int8Array(3610);
const o6 = {
    valueOf() {
        try { this.valueOf(); } catch (e) {}
        v2[1] >>>= 3610;
    },
};
o6.valueOf();
gc();
