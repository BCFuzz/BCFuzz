const v2 = new Uint16Array(2749);
const v3 = v2.slice();
const o8 = {
    valueOf() {
        try { this.valueOf(); } catch (e) {}
        v3[1] >>>= 3610;
        return 3610;
    },
};
o8.valueOf();
for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
}
gc();
