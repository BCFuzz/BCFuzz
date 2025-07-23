const v2 = Uint8Array.from([-5.0,1.520951819133005e+308,NaN,1.362825526176467e+308,Infinity,0.7140679706498753,Infinity]);
createGlobalObject().Atomics.store(v2);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = -3, i20 = 10; i19 < i20; i20--) {
}
gc();
