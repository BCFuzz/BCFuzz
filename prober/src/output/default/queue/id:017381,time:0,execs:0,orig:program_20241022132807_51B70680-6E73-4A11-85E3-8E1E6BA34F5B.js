for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v11 = this.hasOwnProperty();
            if (v11 === (v11 && v11)) {
            } else {
            }
        }
        new F7(this, a6);
        const v15 = new F7(F7, a3);
        const t12 = v15.constructor;
        new t12(v0);
        const v18 = v15.constructor;
        const v19 = new v18();
        new v18(v19, this, F1, v19, F7);
    }
    new F1(F1, F1, F1, v0);
    new F1();
}
gc();
