let v0 = 8;
v0--;
const v2 = `
    do {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a7;
        }
    } while (0 < 9)
`;
const v10 = v2.split(v0);
const v11 = [2.0,-4.0];
function f12(a13, a14, a15) {
    return f12;
}
const v16 = f12();
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    try { a22.constructor(v10); } catch (e) {}
}
new F17(v11, f12, v16, F17);
gc();
