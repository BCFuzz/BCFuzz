const v0 = [];
function f1() {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
        typeof F2 === a4;
        const v7 = this.constructor;
        try { new v7(v7, F2, v7); } catch (e) {}
    }
    new F2();
    return f1;
}
v0.valueOf = f1;
934305.379841754 ^ v0;
gc();
