const v1 = ["undefined"];
function f3() {
    function f4() {
    }
    f4();
    function F6(a8) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = this.constructor;
        try { new v9(); } catch (e) {}
        this.g = a8;
        this.h = f4;
    }
    new F6();
    const v12 = new F6();
    return v12;
}
v1.valueOf = f3;
934305.379841754 ^ v1;
gc();
