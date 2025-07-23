for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v3 = -Infinity;
        const v5 = new Date();
        v5.getUTCMinutes();
        class C7 {
        }
        const v8 = new C7();
        try { v8.constructor(v8, v3, v8, this, v8); } catch (e) {}
        v5.setTime(v3);
    }
    new F1();
}
gc();
