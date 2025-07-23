for (let v4 = 0; v4 < 5; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = v4.__defineSetter__;
        t3(F5);
    }
    continue;
}
gc();
