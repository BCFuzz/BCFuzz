for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F2(v1, "egX4", "egX4");
    function f8() {
        const t6 = "egX4";
        return delete t6.length;
    }
    v7.constructor = f8;
    const v10 = `
        const v11 = v7.constructor;
        const t12 = v11("egX4", v11).constructor;
        const v14 = t12(F2);
        const t14 = v14.constructor;
        t14(v14);
        for (let v17 = 0; v17 < 10; v17++) {
            for (let v18 = 0; v18 < 5; v18++) {
                for (let v19 = 0; v19 < 5; v19++) {
                }
                for (let v20 = 0; v20 < 5; v20++) {
                }
            }
        }
    `;
    eval(v10);
}
gc();
