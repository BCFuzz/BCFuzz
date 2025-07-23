const v2 = this.constructor.seal(this);
v2.globalThis = v2;
gc();
