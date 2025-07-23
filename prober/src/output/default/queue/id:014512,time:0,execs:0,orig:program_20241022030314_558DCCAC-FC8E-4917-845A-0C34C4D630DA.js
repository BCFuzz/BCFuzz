const o8 = {
    valueOf(a1) {
        const v3 = `
            switch ("n") {
                default:
                    const v4 = delete this.h;
                    let v5;
                    try { v5 = v4(); } catch (e) {}
                    v5 ||= a1;
                    break;
            }
        `;
        eval(v3);
        return a1;
    },
};
o8.valueOf(o8, o8, o8);
gc();
