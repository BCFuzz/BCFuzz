class C0 {
    static {
        const o2 = {
            "construct": this,
        };
        const v4 = new Proxy(this, o2);
        try { new v4(Proxy); } catch (e) {}
    }
}
gc();
