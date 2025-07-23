const v1 = new Date();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        "" + v1;
        return v1;
    }
    this.then = f4;
    for (let v7 = 0; v7 < 5; v7++) {
        async function f8(a9, a10, a11, a12) {
            return a11;
        }
        f8(v7, this, this);
    }
}
new F2();
for (let i17 = 0, i18 = 257; i18--, i17 < i18;) {
}
gc();
