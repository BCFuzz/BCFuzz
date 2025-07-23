const o1 = {
    16: -549n,
};
const o5 = {
    valueOf(a4) {
        a4[3.0] = this;
        return o1;
    },
};
const o10 = {
    valueOf(a8) {
        try { this.valueOf(o1); } catch (e) {}
        a8[3.0] = this;
        return this;
    },
};
const o11 = {
    ...o10,
};
const v14 = new Uint8Array(o1, 3.0, 3.0);
const v15 = v14.reverse();
try { v15.copyWithin(o5); } catch (e) {}
const v17 = new Date(3.0);
try { v17.setUTCFullYear(o11); } catch (e) {}
gc();
