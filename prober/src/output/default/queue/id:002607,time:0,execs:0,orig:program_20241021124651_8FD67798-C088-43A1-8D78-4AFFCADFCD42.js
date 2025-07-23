try { Uint32Array.__proto__(); } catch (e) {}
async function f2(a3, a4, a5, a6) {
    return a6;
}
f2().catch(f2);
gc();
