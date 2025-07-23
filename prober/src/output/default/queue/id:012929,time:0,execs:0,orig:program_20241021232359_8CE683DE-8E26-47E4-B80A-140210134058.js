function f0() {
    createGlobalObject();
    return createGlobalObject().Atomics.compareExchange();
}
let v6;
try { v6 = f0(); } catch (e) {}
try { f0.call(v6); } catch (e) {}
gc();
