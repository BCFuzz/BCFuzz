for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o19 = {
    toString(a14, a15) {
        const v17 = Reflect.toLocaleString().constructor;
        v17.fromCharCode("-13", a15);
        return v17;
    },
};
try { o19.toString(Uint16Array, o19); } catch (e) {}
gc();
