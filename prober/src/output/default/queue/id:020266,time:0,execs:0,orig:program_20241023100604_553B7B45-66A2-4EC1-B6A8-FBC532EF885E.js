const o10 = {
    toString(a1) {
        try { this.propertyIsEnumerable(this); } catch (e) {}
        function f3(a4) {
            const v7 = new Map();
            v7.entries();
            return arguments;
        }
        f3();
    },
};
function f12(a13, a14, a15, a16) {
    a16.toString();
    return f12;
}
for (let v18 = 0; v18 < 5; v18++) {
    const t16 = f12(f12, v18, o10, f12);
    t16(o10, 2, v18, o10);
}
gc();
