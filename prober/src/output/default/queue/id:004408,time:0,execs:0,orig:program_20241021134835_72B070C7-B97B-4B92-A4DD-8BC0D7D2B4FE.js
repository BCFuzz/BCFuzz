const v0 = [];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7, a8) {
        const o9 = {
            __proto__: this,
        };
        return o9;
    }
    f4().parseInt(129, v0);
}
new F2();
gc();
