const v2 = new Uint32Array([1.2172957200927917e+308,1000000000.0,-0.0,1000.0,-1000000000000.0,-889994.6485992478]);
v2.reverse();
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    createGlobalObject().Atomics.exchange(v2);
}
gc();
