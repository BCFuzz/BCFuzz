const o4 = {
    valueOf(a2, a3) {
        a2[0] %= 0;
        return a2;
    },
};
const o5 = {
    ...o4,
};
o5.length = o5;
const o6 = {
    ...o5,
};
try { new Uint8ClampedArray(o6); } catch (e) {}
gc();
