for (let i = 0; i < 10; i++) {
    const v0 = [4.0,Infinity,0.5618997475165836,0.43493627721911254,3.0,NaN,-0.0,4.0];
    const o1 = {
        __proto__: v0,
    };
    o1.copyWithin(o1);
}
gc();
