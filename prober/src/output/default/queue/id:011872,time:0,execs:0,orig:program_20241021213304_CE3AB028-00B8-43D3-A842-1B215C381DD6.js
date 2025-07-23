function f0(a1, a2, a3) {
    const v4 = `
        try { this.unescape(f0); } catch (e) {}
        Math.hypot();
    `;
    return eval(v4);
}
f0[Symbol.toPrimitive] = f0;
f0();
gc();
