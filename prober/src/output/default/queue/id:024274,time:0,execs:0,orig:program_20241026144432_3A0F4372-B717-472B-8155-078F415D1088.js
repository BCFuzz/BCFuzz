function f0() {
    const v2 = [];
    const v3 = [5.0,0.15731719625813334];
    v3.shared = 2502;
    v3.minimum = v2;
    const v5 = this.WebAssembly;
    const t6 = v5.Memory;
    new t6(v3);
    return v5;
}
try { f0(); } catch (e) {}
gc();
