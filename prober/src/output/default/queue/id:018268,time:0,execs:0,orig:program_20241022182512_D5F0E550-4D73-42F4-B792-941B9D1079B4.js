class C1 extends String {
    static {
        const v3 = this.prototype;
        try { v3.localeCompare(); } catch (e) {}
    }
}
gc();
