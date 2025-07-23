let v0 = 2711;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const o9 = {
        };
        const v10 = v0--;
        const v13 = ("-789426228").constructor.fromCharCode();
        v13.substring().charAt(v10);
        o9.n;
        for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
        }
        const v27 = new SharedArrayBuffer(v13, this);
        const v29 = new DataView(v27);
        v29.setBigInt64(536870887, F1);
    }
    new F5();
    return F1;
}
F1.toString = f4;
try { F1.toLocaleString(); } catch (e) {}
gc();
