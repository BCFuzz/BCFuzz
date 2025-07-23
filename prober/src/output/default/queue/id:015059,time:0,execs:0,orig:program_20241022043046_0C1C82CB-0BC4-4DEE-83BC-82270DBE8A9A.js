for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    [1073741823,-3];
    const o11 = {
    };
    const v12 = o11.__defineSetter__;
    try { v12(); } catch (e) {}
    const v14 = /gUa\Sc/dgi;
    try { v14.test(o11); } catch (e) {}
    const v18 = createGlobalObject().Atomics;
    try { v18.notify(v18); } catch (e) {}
    for (let v20 = 0; v20 < 500; v20++) {
    }
}
gc();
