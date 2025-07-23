for (let i2 = 0, i3 = 10;
    (() => {
        let v4 = i2 < i3;
        v4--;
        const v6 = `
            function f7() {
                return f7;
            }
            const v10 = new Uint32Array(4046);
            v10.reduce(f7);
        `;
        eval(v6);
        return v4;
    })();
    ) {
}
gc();
