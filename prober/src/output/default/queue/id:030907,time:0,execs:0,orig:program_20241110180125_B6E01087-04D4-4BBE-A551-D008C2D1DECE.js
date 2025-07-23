for (let [i36, i37] = (() => {
        for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
        }
        const v11 = `
            const v13 = typeof 3614;
            /\u{12345}/myvis;
            v13 === "object";
        `;
        const v18 = v11.split(v11[6]);
        v18.reverse();
        let v20;
        try { v20 = v18.flatMap(runString); } catch (e) {}
        for (let i22 = 0, i23 = v20; i23--;) {
        }
        const v34 = createGlobalObject().WebAssembly.instantiate(v18);
        v34.then(v34, createGlobalObject);
        return [0, 10];
    })();
    (() => {
        const v38 = i36 != i37;
        return v38 && v38;
    })();
    i37--) {
}
gc();
