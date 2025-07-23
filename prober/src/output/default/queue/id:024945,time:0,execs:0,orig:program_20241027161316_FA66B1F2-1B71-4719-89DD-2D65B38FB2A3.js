for (let [i3, i4] = (() => {
        let v0 = 0;
        v0--;
        return [v0, 10];
    })();
    i3 < i4;
    (() => {
        i4--;
        const v10 = Date();
        const t2 = v10.constructor;
        const v13 = t2().toLocaleLowerCase(i3, v10, i4);
        const v15 = new Int32Array();
        for (let v16 = 0; v16 < 5; v16++) {
            v15[v13 + i3] = v16;
        }
    })()) {
}
gc();
