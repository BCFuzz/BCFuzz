for (let v1 = 0; v1 < 5; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = this.__defineSetter__;
        t3(F2);
    }
    continue;
}
eval("");
gc();
