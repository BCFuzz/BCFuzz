const v1 = -1.2745552869972839e+308 | -1.2745552869972839e+308;
function f2(a3, a4, a5) {
    const v6 = `
        const v8 = this.RegExp;
        function f9() {
            return a3;
        }
        function f10(a11) {
            for (let i = 0; i < 10; i++) {
                const v14 = [v8,v8,v8,v8,v8];
                const v16 = new ArrayBuffer(v1);
                const v18 = new DataView(v16);
                try { v18.getFloat32(v14); } catch (e) {}
                const v20 = new Int32Array(255);
                for (const v21 in v20) {
                }
            }
            return f9;
        }
        Object.defineProperty(v8, "d", { enumerable: true, get: f9, set: f10 });
        v8.d = v8;
    `;
    return eval(v6);
}
f2();
gc();
