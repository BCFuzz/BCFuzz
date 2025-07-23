for (let v3 = 0; v3 < 5; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = this.__defineSetter__;
        t3();
    }
    try { new F4(); } catch (e) {}
}
gc();
