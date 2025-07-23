function f0(a1, a2, a3) {
    const v4 = `
        try { this.BigInt(v4); } catch (e) {}
    `;
    eval(v4);
    return eval;
}
f0(f0, f0, f0);
gc();
