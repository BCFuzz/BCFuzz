for (let [i24, i25] = (() => {
        const v0 = `
            try {
                class C1 {
                }
                class C2 extends C1 {
                }
                const t6 = C2().constructor;
                BigInt.apply(t6(), [15957,-2,-128,-1,23328]);
            } catch(e9) {
            }
            for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
            }
        `;
        eval(v0);
        return [0, 10];
    })();
    i24 !== i25;
    i25--) {
    for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    }
}
gc();
