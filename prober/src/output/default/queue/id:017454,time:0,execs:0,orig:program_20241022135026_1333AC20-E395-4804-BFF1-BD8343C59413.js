for (let v0 = 0; v0 < 25; v0++) {
    for (let v1 = 0; v1 < 5; v1++) {
        const v3 = new Float32Array(v0, v0, v0);
        const v6 = this.WebAssembly.Module;
        try { new v6(v3); } catch (e) {}
    }
}
gc();
