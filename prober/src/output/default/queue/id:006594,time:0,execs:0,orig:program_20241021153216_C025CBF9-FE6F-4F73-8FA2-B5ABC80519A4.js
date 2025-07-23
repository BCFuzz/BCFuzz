for (let i = 0; i < 5; i++) {
    const o8 = {
        toString(a1, a2) {
            const v5 = new Date();
            v5.getMonth();
            v5.setUTCMonth(-1000.0);
            return v5;
        },
    };
    o8.toString(o8, o8, o8);
}
gc();
