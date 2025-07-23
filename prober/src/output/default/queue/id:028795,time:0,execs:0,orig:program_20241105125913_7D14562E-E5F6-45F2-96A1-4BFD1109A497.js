class C0 {
    constructor(a2) {
        const v4 = `
            function F5() {
                if (!new.target) { throw 'must be called with new'; }
                function f7() {
                    return a2;
                }
                Object.defineProperty(this, "maxByteLength", { get: f7 });
                new SharedArrayBuffer(Uint8ClampedArray, this);
            }
            new F5();
        `;
        const v12 = v4.split();
        try { v12.flatMap(eval); } catch (e) {}
    }
}
new C0();
gc();
