const v2 = new Uint8Array();
v2.buffer.transferToFixedLength();
const o9 = {
    n(a6, a7, a8) {
        return v2;
    },
};
const v11 = o9.n.apply();
try { v11.setFromBase64("cause"); } catch (e) {}
gc();
