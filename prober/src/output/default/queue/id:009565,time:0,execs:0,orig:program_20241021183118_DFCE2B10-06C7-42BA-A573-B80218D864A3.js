const v0 = [];
function f1() {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = typeof this === "function";
        const v8 = this.constructor;
        try { new v8(v8, v7, v7, v8, v0); } catch (e) {}
    }
    new F2();
    return v0;
}
v0.valueOf = f1;
934305.379841754 ^ v0;
gc();
