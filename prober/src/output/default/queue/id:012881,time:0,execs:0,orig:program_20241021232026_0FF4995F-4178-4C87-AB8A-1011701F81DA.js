const o6 = {
    toString(a4, a5) {
        return 3;
    },
};
const v7 = new ArrayBuffer();
try { new Float32Array(v7, o6, 1148); } catch (e) {}
gc();
