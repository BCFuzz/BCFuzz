const v2 = new Map();
function f3(a4, a5, a6) {
    return v2;
}
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
}
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const o29 = {
        toString(a24, a25) {
            try { this.toString(a22); } catch (e) {}
            const t11 = this.constructor;
            new t11(a24);
            return a19;
        },
    };
    -o29;
}
new F17(1073741823, 1073741823, f3, v2);
new F17();
gc();
