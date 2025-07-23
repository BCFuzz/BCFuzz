class C0 {
    constructor(a2) {
        const v5 = new Int32Array(681);
        function f6(a7, a8, a9, a10) {
            -(a7--);
            arguments.valueOf = f6;
            return arguments;
        }
        v5.map(f6);
    }
}
new C0();
gc();
