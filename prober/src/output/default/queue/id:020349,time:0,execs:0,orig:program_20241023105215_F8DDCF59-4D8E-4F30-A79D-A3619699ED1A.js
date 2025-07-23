for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o20 = {
    toString(a11) {
        let v12;
        try { v12 = this.propertyIsEnumerable(this); } catch (e) {}
        function f13(a14) {
            const v17 = new Map();
            v17.entries();
            return arguments;
        }
        f13(this);
        return v12;
    },
};
o20.toString();
function f23(a24, a25, a26, a27) {
    a24.length = a24;
    a27.toString(o20, a26, f23, a24);
    return f23;
}
for (let v29 = 0; v29 < 5; v29++) {
    const t22 = f23(f23, v29, o20, f23);
    t22(o20, 2, v29, o20);
}
gc();
