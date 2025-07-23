class C2 {
    static valueOf(a4, a5) {
        function F6(a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            a9.e = a9;
            this.e = a9;
        }
        const v11 = new F6(196.25100004624983, F6);
        const v12 = v11.e;
        try { new v12(); } catch (e) {}
        new F6("valueOf", this);
    }
    ["valueOf"];
    static #g = 196.25100004624983;
}
C2.valueOf();
gc();
