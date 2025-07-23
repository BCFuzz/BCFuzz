const o7 = {
    toString(a2, a3) {
        const v5 = new Uint16Array("mP", a2);
        try { v5.toSorted("mP"); } catch (e) {}
        return v5;
    },
};
o7.toString();
gc();
