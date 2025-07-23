function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 5; v5++) {
        Object.defineProperty(([1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733]).__proto__, 2, { configurable: true, value: v5 });
    }
    const t5 = ([-29208.381894138176,1000000000.0,NaN,0.8749487065166315,-4.0,-1.0]).constructor;
    const v10 = t5();
    try { v10.push(v10, Uint8Array, Uint8Array); } catch (e) {}
}
new F1();
gc();
