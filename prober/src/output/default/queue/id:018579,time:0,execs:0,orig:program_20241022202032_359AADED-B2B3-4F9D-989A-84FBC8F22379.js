function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = [1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733];
        for (let i = 0; i < 50; i++) {
        }
        Object.defineProperty(v5.__proto__, 2, { configurable: true, value: v4 });
    }
    [-29208.381894138176,1000000000.0,NaN,0.8749487065166315,-4.0,-1.0];
}
new F0();
gc();
