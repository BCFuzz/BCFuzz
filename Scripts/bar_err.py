import matplotlib.pyplot as plt
import numpy as np

# 示例数据
labels = ['A', 'B', 'C', 'D']
values = [10, 15, 7, 12]
errors = [1.5, 2.0, 1.0, 1.8]  # 每组柱子的误差值

# 创建柱状图
x = np.arange(len(labels))
width = 0.6  # 柱宽

fig, ax = plt.subplots()
bars = ax.bar(x, values, width, yerr=errors, capsize=5, color='skyblue', edgecolor='black')

# 添加标签和标题
ax.set_ylabel('值')
ax.set_title('带误差线的柱形图')
ax.set_xticks(x)
ax.set_xticklabels(labels)

# 可选：添加数值标签
#for bar in bars:
#    height = bar.get_height()
#    ax.annotate(f'{height:.1f}',
#                xy=(bar.get_x() + bar.get_width() / 2, height),
#                xytext=(0, 3),  # 向上偏移3点
#                textcoords="offset points",
#                ha='center', va='bottom')

# 显示图形
plt.tight_layout()
plt.show()