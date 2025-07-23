class C1 {
    static {
        const v4 = this["toString"]();
        try { ("toString").localeCompare(v4, v4); } catch (e) {}
    }
    static get d() {
        return -235526.07400570763;
    }
}
gc();
