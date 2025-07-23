for (let i3 = 0, i4 = 257; i4--, i3 < i4;) {
}
class C11 {
    constructor(a13) {
        const v15 = `
            for (let i17 = a13, i18 = 10;
                (() => {
                    const v20 = new Int32Array();
                    v20.map(i17, v20);
                    return i17 < i18;
                })();
                ) {
            }
        `;
        const v27 = v15.split("m");
        try { v27.flatMap(eval); } catch (e) {}
    }
}
new C11();
gc();
