const v4 = [("prototype").constructor.fromCharCode(-1024)];
v4[1] = v4;
v4.join(v4);
gc();
