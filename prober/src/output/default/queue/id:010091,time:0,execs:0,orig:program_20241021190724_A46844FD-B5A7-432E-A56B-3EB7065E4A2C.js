function f0() {
    const o1 = {
    };
    return o1;
}
class C2 extends f0 {
    static {
        const o4 = {
            "construct": f0,
        };
        const v6 = new Proxy(this, o4);
        new v6(o4, this, Proxy);
    }
}
gc();
