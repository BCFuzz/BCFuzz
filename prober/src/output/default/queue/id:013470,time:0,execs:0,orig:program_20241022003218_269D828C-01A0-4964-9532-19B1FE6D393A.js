class C1 {
    static {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            Math.ceil(a6);
            Math.pow(a6, -536870912);
            const v13 = new Uint8ClampedArray(255);
            for (const v14 in v13) {
            }
            this.b = true;
        }
        new F3(this, F3);
        new F3();
        new F3(F3, true);
    }
}
gc();
