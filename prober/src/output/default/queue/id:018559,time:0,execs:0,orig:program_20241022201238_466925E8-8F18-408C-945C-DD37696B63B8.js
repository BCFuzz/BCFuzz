for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = ("toStringTag").fontsize();
        const v8 = v7.toLocaleLowerCase();
        for (let [i12, i13] = (() => {
                v8 == v7;
                return [0, 10];
            })();
            i12 < i13;
            i13--) {
        }
    }
    const v20 = new F2();
    const v21 = v20.constructor;
    new v21(v21, "toStringTag", v20);
}
gc();
