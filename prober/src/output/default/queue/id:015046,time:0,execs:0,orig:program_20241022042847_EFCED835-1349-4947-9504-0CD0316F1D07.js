for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
    }
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        this instanceof C1;
    }
    F2.prototype = F2;
    const v8 = new F2(v0, v0, C1);
    v8.length;
}
gc();
