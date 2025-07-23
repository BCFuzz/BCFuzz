const o0 = {
};
const v1 = [o0];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(o0, v1, F2);
for (let i10 = 1, i11 = 10; i10 < i11; i11--) {
}
for (let v18 = 0; v18 < 25; v18++) {
    function f19() {
    }
    const o25 = {
        toString(a21, a22) {
            a21.toString(v1, v1);
            a22.c;
            a22.toString = f19;
            return a21;
        },
    };
    o25.toString(o25, f19).toString(v7, o0);
    o25.toString(o25, o25);
}
gc();
