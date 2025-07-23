for (let v0 = 0; v0 < 5; v0++) {
    for (let i = 0; i < 10; i++) {
        const o6 = {
            set b(a2) {
                for (let v3 = 0; v3 < 5; v3++) {
                    delete arguments.length;
                }
            },
        };
        o6.b = o6;
    }
    const v9 = new Uint32Array(1000);
    for (const v10 in v9) {
    }
}
gc();
