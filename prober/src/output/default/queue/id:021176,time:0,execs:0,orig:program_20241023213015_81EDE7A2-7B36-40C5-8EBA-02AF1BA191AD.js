const o6 = {
    toString(a2, a3) {
        Proxy.prototype = 4n;
        class C5 extends Proxy {
        }
        return Proxy;
    },
};
try { o6.toString(o6, o6, o6, o6); } catch (e) {}
gc();
