const lessons = [
    {
        title: "第1单元：Python核心基础",
        content: `
            <div class="lesson-intro">
                <h3>Python核心基础入门</h3>
                <p>本单元将带你深入学习Python的核心基础，包括语法、数据类型、数据结构和函数等核心概念，为后续学习打下坚实基础。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20language%20logo%20with%20snake%20symbol%2C%20colorful%2C%20friendly%20design%2C%20simple%20background&image_size=square" alt="Python Logo" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、Python基础语法</h4>
            <p>Python是一种简单易学、功能强大的编程语言，具有清晰的语法结构，让我们从最基础的语法开始学习。</p>

            <h5>1.1 变量与数据类型</h5>
            <pre><code># 变量与数据类型示例
name = "李艺"           # 字符串
age = 18                # 整数
height = 1.65           # 浮点数
is_student = True       # 布尔值

# 打印变量
print("姓名:", name)
print("年龄:", age)
print("身高:", height)</code></pre>

            <h5>1.2 运算符</h5>
            <table class="operator-table">
                <tr>
                    <th>运算符类型</th>
                    <th>运算符</th>
                    <th>描述</th>
                </tr>
                <tr>
                    <td>算术运算符</td>
                    <td>+, -, *, /, %, **, //</td>
                    <td>加、减、乘、除、取余、幂、整除</td>
                </tr>
                <tr>
                    <td>比较运算符</td>
                    <td>==, !=, >, <, >=, <=</td>
                    <td>等于、不等于、大于、小于、大于等于、小于等于</td>
                </tr>
                <tr>
                    <td>逻辑运算符</td>
                    <td>and, or, not</td>
                    <td>与、或、非</td>
                </tr>
            </table>

            <h5>1.3 条件语句与循环</h5>
            <pre><code># if-elif-else语句示例
score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")

# for循环示例
for i in range(5):
    print("循环次数:", i)

# while循环示例
count = 0
while count < 5:
    print("计数:", count)
    count += 1</code></pre>

            <h4>二、数据结构</h4>
            <p>Python提供了丰富的数据结构，包括列表、元组、字典和集合，让我们逐一学习它们。</p>

            <h5>2.1 列表（List）</h5>
            <pre><code># 列表操作示例
numbers = [1, 2, 3, 4, 5]
numbers.append(6)          # 添加元素
numbers.insert(0, 0)       # 插入元素
print("列表:", numbers)
print("第一个元素:", numbers[0])
print("最后一个元素:", numbers[-1])
print("列表切片:", numbers[1:4])</code></pre>

            <h5>2.2 元组、字典与集合</h5>
            <pre><code># 元组示例
point = (10, 20)
print("元组:", point)

# 字典示例
student = {
    "name": "李艺",
    "age": 18,
    "major": "商务数据分析"
}
print("字典:", student)
print("学生姓名:", student["name"])

# 集合示例
unique_numbers = {1, 2, 3, 4, 5}
print("集合:", unique_numbers)</code></pre>

            <h4>三、函数与模块</h4>
            <p>函数是组织代码的基本单位，模块则帮助我们组织和重用代码。</p>

            <h5>3.1 函数定义与调用</h5>
            <pre><code># 函数定义示例
def greet(name):
    """问候函数"""
    return f"你好，{name}！"

def calculate_sum(a, b):
    """计算两数之和"""
    return a + b

# 调用函数
print(greet("李艺"))
print("两数之和:", calculate_sum(3, 5))</code></pre>

            <h5>3.2 函数参数与返回值</h5>
            <pre><code># 默认参数
def greet(name, greeting="你好"):
    return f"{greeting}，{name}！"

# 可变参数
def sum_all(*args):
    return sum(args)

# 返回多个值
def get_coordinates():
    return 10, 20

print(greet("李艺"))
print(sum_all(1, 2, 3, 4, 5))
x, y = get_coordinates()
print("坐标:", x, y)</code></pre>

            <h5>3.3 模块的导入与使用</h5>
            <pre><code># 导入模块
import math

# 使用模块中的函数
print("平方根:", math.sqrt(16))
print("圆周率:", math.pi)
print("正弦函数:", math.sin(math.pi / 2))</code></pre>

            <h4>四、面向对象编程基础</h4>
            <p>面向对象编程是一种重要的编程范式，让我们学习Python中的类和对象。</p>

            <h5>4.1 类的定义与使用</h5>
            <pre><code># 类的定义示例
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"你好，我是{self.name}，今年{self.age}岁。"

# 创建对象
person = Person("李艺", 18)
print(person.greet())</code></pre>

            <h5>4.2 继承与多态</h5>
            <pre><code># 继承示例
class Student(Person):
    def __init__(self, name, age, major):
        super().__init__(name, age)
        self.major = major
    
    def study(self):
        return f"{self.name}正在学习{self.major}。"

student = Student("李艺", 18, "商务数据分析")
print(student.greet())
print(student.study())</code></pre>

            <h4>五、综合练习</h4>
            <p>让我们通过一个综合练习来巩固所学知识。</p>
            <pre><code># 简易学生成绩管理系统
class StudentGradeSystem:
    def __init__(self):
        self.students = []
    
    def add_student(self, name, score):
        self.students.append({"name": name, "score": score})
    
    def calculate_average(self):
        if not self.students:
            return 0
        total_score = sum(student["score"] for student in self.students)
        return total_score / len(self.students)
    
    def get_highest_score(self):
        if not self.students:
            return None
        return max(self.students, key=lambda x: x["score"])

# 使用示例
system = StudentGradeSystem()
system.add_student("李艺", 85)
system.add_student("张三", 90)
system.add_student("李四", 78)
print("平均分:", system.calculate_average())
print("最高分学生:", system.get_highest_score())</code></pre>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>恭喜你完成了Python核心基础的学习！接下来，我们将学习数据处理与分析，这是数据科学的核心技能。</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>Python中定义函数使用什么关键字？
                        <ul>
                            <li>A. function</li>
                            <li>B. def</li>
                            <li>C. func</li>
                            <li>D. define</li>
                        </ul>
                    </li>
                    <li>以下哪个数据结构是不可变的？
                        <ul>
                            <li>A. 列表</li>
                            <li>B. 元组</li>
                            <li>C. 字典</li>
                            <li>D. 集合</li>
                        </ul>
                    </li>
                    <li>Python中类的初始化方法是？
                        <ul>
                            <li>A. init</li>
                            <li>B. __init__</li>
                            <li>C. constructor</li>
                            <li>D. __constructor__</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>Python是一种强类型语言，变量必须先声明类型后使用。（ ）</li>
                    <li>在Python中，列表和字典都是可变的数据结构。（ ）</li>
                </ol>

                <h5>三、编程题</h5>
                <ol>
                    <li>编写一个函数，计算给定列表的平均值。</li>
                    <li>创建一个简单的类，实现学生信息的管理，包括添加学生和查询学生信息。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第2单元：数据处理与分析",
        content: `
            <div class="lesson-intro">
                <h3>数据处理与分析入门</h3>
                <p>本单元将带你学习使用Python进行数据处理与分析，包括NumPy、Pandas和数据可视化等核心内容，这是数据科学的基础技能。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20science%20visualization%20charts%20and%20graphs%2C%20colorful%2C%20modern%20design%2C%20simple%20background&image_size=square" alt="Data Analysis" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、NumPy基础</h4>
            <p>NumPy是Python数值计算的基础库，提供了高性能的多维数组对象和数学函数。</p>

            <h5>1.1 NumPy数组创建</h5>
            <pre><code># NumPy数组示例
import numpy as np

# 创建数组
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.zeros((2, 3))
arr3 = np.ones((2, 3))
arr4 = np.random.rand(2, 3)

print("一维数组:", arr1)
print("零数组:", arr2)
print("一数组:", arr3)
print("随机数组:", arr4)</code></pre>

            <h5>1.2 NumPy数组操作</h5>
            <pre><code># 数组操作示例
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 数组索引和切片
print("第一行:", arr[0])
print("第一列:", arr[:, 0])
print("前两行前两列:", arr[:2, :2])

# 数组运算
print("加10:", arr + 10)
print("乘2:", arr * 2)
print("转置:", arr.T)
print("求和:", arr.sum())
print("均值:", arr.mean())
print("标准差:", arr.std())</code></pre>

            <h4>二、Pandas基础</h4>
            <p>Pandas是Python数据分析的核心库，提供了强大的数据结构和数据处理工具。</p>

            <h5>2.1 DataFrame创建</h5>
            <pre><code># Pandas示例
import pandas as pd

# 创建DataFrame
data = {
    "姓名": ["李艺", "张三", "李四", "王五"],
    "年龄": [18, 20, 19, 21],
    "成绩": [85, 90, 78, 92],
    "专业": ["商务数据分析", "计算机", "金融", "商务数据分析"]
}
df = pd.DataFrame(data)
print("DataFrame:")
print(df)</code></pre>

            <h5>2.2 数据处理与分析</h5>
            <pre><code># 数据处理示例
# 查看基本信息
print("基本信息:")
print(df.info())
print("描述统计:")
print(df.describe())

# 数据筛选
print("成绩大于80的学生:")
print(df[df["成绩"] > 80])

# 分组统计
print("按专业分组的平均成绩:")
print(df.groupby("专业")["成绩"].mean())

# 排序
print("按成绩降序排列:")
print(df.sort_values("成绩", ascending=False))</code></pre>

            <h5>2.3 数据读取与保存</h5>
            <pre><code># 数据读取与保存示例
# 保存为CSV文件
df.to_csv("students.csv", index=False)
print("CSV文件保存成功！")

# 读取CSV文件
df_read = pd.read_csv("students.csv")
print("读取的CSV数据:")
print(df_read)</code></pre>

            <h4>三、数据可视化</h4>
            <p>数据可视化是数据分析的重要组成部分，让我们学习使用Matplotlib和Seaborn进行可视化。</p>

            <h5>3.1 Matplotlib基础</h5>
            <pre><code># Matplotlib可视化示例
import matplotlib.pyplot as plt

# 折线图
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label="sin(x)", color="blue", linewidth=2)
plt.title("正弦函数")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)
plt.show()</code></pre>

            <h5>3.2 柱状图与散点图</h5>
            <pre><code># 柱状图示例
plt.figure(figsize=(10, 6))
plt.bar(df["姓名"], df["成绩"], color="skyblue")
plt.title("学生成绩对比")
plt.xlabel("姓名")
plt.ylabel("成绩")
plt.ylim(0, 100)
for i, v in enumerate(df["成绩"]):
    plt.text(i, v + 1, str(v), ha="center")
plt.show()

# 散点图示例
plt.figure(figsize=(10, 6))
plt.scatter(df["年龄"], df["成绩"], s=100, c="red", alpha=0.5)
plt.title("年龄与成绩关系")
plt.xlabel("年龄")
plt.ylabel("成绩")
plt.grid(True)
plt.show()</code></pre>

            <h5>3.3 Seaborn进阶可视化</h5>
            <pre><code># Seaborn可视化示例
import seaborn as sns

# 设置样式
sns.set_style("whitegrid")

# 箱线图
plt.figure(figsize=(10, 6))
sns.boxplot(x="专业", y="成绩", data=df)
plt.title("不同专业的成绩分布")
plt.show()

# 热力图（需要更多数据演示）
plt.figure(figsize=(10, 6))
sns.heatmap(df[["年龄", "成绩"]].corr(), annot=True, cmap="coolwarm")
plt.title("相关系数热力图")
plt.show()</code></pre>

            <h4>四、综合案例：电商数据基础分析</h4>
            <p>让我们通过一个电商数据的简单分析案例来综合应用所学知识。</p>
            <pre><code># 电商数据分析案例
# 创建模拟电商数据
sales_data = {
    "日期": pd.date_range("2024-01-01", periods=30),
    "销售额": np.random.randint(1000, 5000, size=30),
    "订单数": np.random.randint(20, 100, size=30),
    "商品类别": np.random.choice(["电子产品", "服装", "食品", "家居"], size=30)
}
sales_df = pd.DataFrame(sales_data)

# 数据预览
print("电商数据预览:")
print(sales_df.head())

# 数据分析
print("\\n按商品类别统计销售额:")
print(sales_df.groupby("商品类别")["销售额"].sum())

# 可视化：销售额趋势
plt.figure(figsize=(12, 6))
plt.plot(sales_df["日期"], sales_df["销售额"], marker="o")
plt.title("销售额趋势图")
plt.xlabel("日期")
plt.ylabel("销售额")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# 可视化：不同类别商品销售额对比
plt.figure(figsize=(10, 6))
sns.barplot(x="商品类别", y="销售额", data=sales_df, estimator=sum)
plt.title("不同类别商品销售额对比")
plt.show()</code></pre>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>恭喜你掌握了数据处理与分析的基本技能！接下来，我们将学习AI基础与应用，探索人工智能的奥秘。</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>NumPy中用于创建零数组的函数是？
                        <ul>
                            <li>A. ones</li>
                            <li>B. zeros</li>
                            <li>C. empty</li>
                            <li>D. full</li>
                        </ul>
                    </li>
                    <li>Pandas中用于读取CSV文件的函数是？
                        <ul>
                            <li>A. read_excel</li>
                            <li>B. read_csv</li>
                            <li>C. read_json</li>
                            <li>D. read_sql</li>
                        </ul>
                    </li>
                    <li>Matplotlib中用于绘制散点图的函数是？
                        <ul>
                            <li>A. plot</li>
                            <li>B. bar</li>
                            <li>C. scatter</li>
                            <li>D. histogram</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>Pandas的Series是一维数组，DataFrame是二维表格型数据结构。（ ）</li>
                    <li>在Matplotlib中，plt.show()用于显示图形。（ ）</li>
                </ol>

                <h5>三、编程题</h5>
                <ol>
                    <li>使用Pandas创建一个包含5个学生信息的DataFrame，并计算他们的平均成绩。</li>
                    <li>使用Matplotlib绘制一个简单的折线图，展示某个变量的变化趋势。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第3单元：AI基础与应用",
        content: `
            <div class="lesson-intro">
                <h3>AI基础与应用入门</h3>
                <p>本单元将带你了解AI的基础概念，学习机器学习的核心知识，并通过实际案例了解AI在各个领域的应用，特别是电商领域的应用。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20AI%20robot%20brain%20neural%20networks%2C%20colorful%2C%20modern%20design%2C%20simple%20background&image_size=square" alt="AI" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、AI基础概念</h4>
            <p>人工智能（AI）是计算机科学的一个分支，旨在创建能够执行通常需要人类智能的任务的系统。</p>

            <h5>1.1 AI、机器学习与深度学习</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h5>人工智能（AI）</h5>
                    <p>创建能够模拟人类智能的系统</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>机器学习（ML）</h5>
                    <p>AI的子领域，使系统能够从数据中学习</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <h5>深度学习（DL）</h5>
                    <p>ML的子领域，基于神经网络</p>
                </div>
            </div>

            <h5>1.2 机器学习类型</h5>
            <table class="operator-table">
                <tr>
                    <th>类型</th>
                    <th>描述</th>
                    <th>应用场景</th>
                </tr>
                <tr>
                    <td>监督学习</td>
                    <td>使用有标签的数据训练</td>
                    <td>分类、回归</td>
                </tr>
                <tr>
                    <td>无监督学习</td>
                    <td>使用无标签的数据训练</td>
                    <td>聚类、降维</td>
                </tr>
                <tr>
                    <td>强化学习</td>
                    <td>通过与环境交互学习</td>
                    <td>游戏、机器人</td>
                </tr>
            </table>

            <h4>二、机器学习基础实践</h4>
            <p>让我们使用Scikit-learn库来实践一些简单的机器学习任务。</p>

            <h5>2.1 数据准备</h5>
            <pre><code># 机器学习示例
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, mean_squared_error

# 创建模拟数据
np.random.seed(42)
X = np.random.rand(100, 2)  # 100个样本，2个特征
y_classification = (X[:, 0] + X[:, 1] > 1).astype(int)  # 分类任务标签
y_regression = X[:, 0] * 2 + X[:, 1] * 3 + np.random.randn(100) * 0.1  # 回归任务标签

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y_classification, test_size=0.2, random_state=42)

# 数据标准化
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print("训练集大小:", X_train_scaled.shape)
print("测试集大小:", X_test_scaled.shape)</code></pre>

            <h5>2.2 分类模型</h5>
            <pre><code># 分类模型示例
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

# 逻辑回归
lr_model = LogisticRegression(random_state=42)
lr_model.fit(X_train_scaled, y_train)
lr_pred = lr_model.predict(X_test_scaled)
lr_accuracy = accuracy_score(y_test, lr_pred)
print("逻辑回归准确率:", lr_accuracy)

# 决策树
dt_model = DecisionTreeClassifier(random_state=42)
dt_model.fit(X_train_scaled, y_train)
dt_pred = dt_model.predict(X_test_scaled)
dt_accuracy = accuracy_score(y_test, dt_pred)
print("决策树准确率:", dt_accuracy)

# 随机森林
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train_scaled, y_train)
rf_pred = rf_model.predict(X_test_scaled)
rf_accuracy = accuracy_score(y_test, rf_pred)
print("随机森林准确率:", rf_accuracy)</code></pre>

            <h5>2.3 回归模型</h5>
            <pre><code># 回归模型示例
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor

# 重新划分回归任务的数据集
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(X, y_regression, test_size=0.2, random_state=42)

# 线性回归
lr_reg_model = LinearRegression()
lr_reg_model.fit(X_train_reg, y_train_reg)
lr_reg_pred = lr_reg_model.predict(X_test_reg)
lr_reg_mse = mean_squared_error(y_test_reg, lr_reg_pred)
print("线性回归均方误差:", lr_reg_mse)

# 随机森林回归
rf_reg_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_reg_model.fit(X_train_reg, y_train_reg)
rf_reg_pred = rf_reg_model.predict(X_test_reg)
rf_reg_mse = mean_squared_error(y_test_reg, rf_reg_pred)
print("随机森林回归均方误差:", rf_reg_mse)</code></pre>

            <h4>三、AI应用实践：电商场景</h4>
            <p>AI在电商领域有广泛的应用，让我们学习几个典型的应用案例。</p>

            <h5>3.1 用户购买预测</h5>
            <pre><code># 电商用户购买预测案例
# 创建模拟电商用户数据
ecommerce_data = {
    "访问时长": np.random.rand(500) * 10,  # 分钟
    "浏览商品数": np.random.randint(1, 20, size=500),
    "加入购物车数": np.random.randint(0, 10, size=500),
    "历史购买次数": np.random.randint(0, 20, size=500),
    "是否购买": np.random.choice([0, 1], size=500, p=[0.6, 0.4])
}
ecommerce_df = pd.DataFrame(ecommerce_data)

print("电商用户数据预览:")
print(ecommerce_df.head())

# 准备数据
X = ecommerce_df[["访问时长", "浏览商品数", "加入购物车数", "历史购买次数"]]
y = ecommerce_df["是否购买"]

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练模型
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 评估模型
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("模型准确率:", accuracy)

# 特征重要性
feature_importance = pd.DataFrame({
    "特征": X.columns,
    "重要性": model.feature_importances_
}).sort_values("重要性", ascending=False)
print("特征重要性:")
print(feature_importance)</code></pre>

            <h5>3.2 简单推荐系统</h5>
            <pre><code># 简单推荐系统示例
# 创建模拟用户评分数据
np.random.seed(42)
users = [f"用户{i}" for i in range(10)]
products = [f"商品{i}" for i in range(10)]
ratings = np.random.randint(1, 6, size=(10, 10))
ratings_df = pd.DataFrame(ratings, index=users, columns=products)

print("用户评分矩阵:")
print(ratings_df)

# 简单的协同过滤推荐
def recommend_products(user_id, ratings_df, n_recommendations=3):
    """基于用户的简单推荐"""
    user_ratings = ratings_df.loc[user_id]
    similar_users = ratings_df.drop(user_id).corrwith(user_ratings, axis=1).sort_values(ascending=False).head(3)
    
    recommendations = pd.Series(dtype=float)
    for similar_user in similar_users.index:
        similar_user_ratings = ratings_df.loc[similar_user]
        recommendations = recommendations.add(similar_user_ratings, fill_value=0)
    
    # 移除用户已经评价过的商品
    already_rated = user_ratings[user_ratings > 0].index
    recommendations = recommendations.drop(already_rated, errors="ignore")
    
    return recommendations.sort_values(ascending=False).head(n_recommendations)

# 测试推荐系统
recommendations = recommend_products("用户0", ratings_df)
print("\\n为用户0推荐的商品:")
print(recommendations)</code></pre>

            <h4>四、深度学习入门</h4>
            <p>深度学习是机器学习的前沿领域，让我们了解其基础概念。</p>

            <h5>4.1 神经网络基础</h5>
            <pre><code># 简单神经网络示例
import matplotlib.pyplot as plt

# 激活函数
x = np.linspace(-5, 5, 100)
sigmoid = 1 / (1 + np.exp(-x))
relu = np.maximum(0, x)
tanh = np.tanh(x)

plt.figure(figsize=(15, 5))

plt.subplot(1, 3, 1)
plt.plot(x, sigmoid, label="Sigmoid")
plt.title("Sigmoid激活函数")
plt.legend()

plt.subplot(1, 3, 2)
plt.plot(x, relu, label="ReLU", color="red")
plt.title("ReLU激活函数")
plt.legend()

plt.subplot(1, 3, 3)
plt.plot(x, tanh, label="Tanh", color="green")
plt.title("Tanh激活函数")
plt.legend()

plt.tight_layout()
plt.show()</code></pre>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>恭喜你了解了AI的基础知识！接下来，我们将学习实用工具与工程能力，这是将理论转化为实践的关键技能。</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个是机器学习的监督学习算法？
                        <ul>
                            <li>A. K-means聚类</li>
                            <li>B. 线性回归</li>
                            <li>C. PCA降维</li>
                            <li>D. 以上都不是</li>
                        </ul>
                    </li>
                    <li>以下哪个库常用于机器学习任务？
                        <ul>
                            <li>A. NumPy</li>
                            <li>B. Pandas</li>
                            <li>C. Scikit-learn</li>
                            <li>D. 以上都是</li>
                        </ul>
                    </li>
                    <li>AI在电商中的典型应用不包括？
                        <ul>
                            <li>A. 用户购买预测</li>
                            <li>B. 推荐系统</li>
                            <li>C. 手写数字识别</li>
                            <li>D. 客户服务聊天机器人</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>机器学习分为监督学习、无监督学习和强化学习三大类。（ ）</li>
                    <li>深度学习必须使用神经网络模型。（ ）</li>
                </ol>

                <h5>三、编程题</h5>
                <ol>
                    <li>使用Scikit-learn构建一个简单的分类模型，对给定的数据集进行分类。</li>
                    <li>尝试实现一个简单的推荐系统逻辑，基于用户的历史行为进行推荐。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第4单元：实用工具与工程能力",
        content: `
            <div class="lesson-intro">
                <h3>实用工具与工程能力</h3>
                <p>本单元将带你学习Python开发中的实用工具和工程能力，包括版本控制、文件操作、Web开发、自动化等，这是成为优秀开发者的必备技能。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=software%20development%20coding%20programming%20tools%2C%20colorful%2C%20modern%20design%2C%20simple%20background&image_size=square" alt="Tools" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、文件操作与异常处理</h4>
            <p>文件操作是编程中常见的任务，异常处理则帮助我们优雅地处理程序运行过程中可能出现的错误。</p>

            <h5>1.1 文件读写操作</h5>
            <pre><code># 文件读写示例
# 写入文件
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("第一行内容\\n")
    f.write("第二行内容\\n")
    f.write("第三行内容\\n")
print("文件写入成功！")

# 读取文件
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
print("文件内容:")
print(content)

# 逐行读取
with open("example.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
print("\\n逐行读取:")
for i, line in enumerate(lines, 1):
    print(f"第{i}行: {line.strip()}")</code></pre>

            <h5>1.2 异常处理</h5>
            <pre><code># 异常处理示例
def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "错误：除数不能为零"
    except TypeError:
        return "错误：请输入数字"
    except Exception as e:
        return f"错误：{e}"
    finally:
        print("执行完成")

print(divide(10, 2))
print(divide(10, 0))
print(divide(10, "a"))</code></pre>

            <h5>1.3 目录操作</h5>
            <pre><code># 目录操作示例
import os
import shutil

# 查看当前目录
print("当前目录:", os.getcwd())

# 列出目录内容
print("目录内容:", os.listdir("."))

# 创建目录
if not os.path.exists("test_dir"):
    os.makedirs("test_dir")
    print("目录创建成功")

# 创建文件
with open("test_dir/test_file.txt", "w") as f:
    f.write("测试内容")

# 复制文件
shutil.copy("example.txt", "test_dir/example_copy.txt")
print("文件复制成功")</code></pre>

            <h4>二、Web开发基础</h4>
            <p>使用Python可以快速开发Web应用，让我们学习Flask这个轻量级的Web框架。</p>

            <h5>2.1 Flask入门</h5>
            <pre><code># Flask应用示例
# 保存为 app.py
"""
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>欢迎来到李艺的个人网站！</h1><p>这是一个简单的Flask应用。</p>"

@app.route("/api/data")
def get_data():
    data = {
        "name": "李艺",
        "age": 18,
        "major": "商务数据分析",
        "interests": ["Python", "数据分析", "羽毛球"]
    }
    return jsonify(data)

@app.route("/user/<name>")
def user_profile(name):
    return f"<h1>用户：{name}</h1>"

if __name__ == "__main__":
    app.run(debug=True)
"""
print("Flask应用示例代码已展示，保存为app.py即可运行")</code></pre>

            <h5>2.2 API开发基础</h5>
            <pre><code># API开发示例
# 简单的API设计
"""
from flask import Flask, request, jsonify

app = Flask(__name__)

# 模拟数据库
students = [
    {"id": 1, "name": "李艺", "age": 18, "major": "商务数据分析"},
    {"id": 2, "name": "张三", "age": 20, "major": "计算机"},
    {"id": 3, "name": "李四", "age": 19, "major": "金融"}
]

@app.route("/api/students", methods=["GET"])
def get_students():
    return jsonify({"students": students})

@app.route("/api/students/<int:id>", methods=["GET"])
def get_student(id):
    student = next((s for s in students if s["id"] == id), None)
    if student:
        return jsonify(student)
    return jsonify({"error": "学生不存在"}), 404

@app.route("/api/students", methods=["POST"])
def add_student():
    data = request.get_json()
    new_student = {
        "id": len(students) + 1,
        "name": data.get("name"),
        "age": data.get("age"),
        "major": data.get("major")
    }
    students.append(new_student)
    return jsonify(new_student), 201

if __name__ == "__main__":
    app.run(debug=True)
"""
print("API开发示例代码已展示")</code></pre>

            <h4>三、自动化工具</h4>
            <p>Python是自动化的绝佳选择，让我们学习一些实用的自动化技巧。</p>

            <h5>3.1 定时任务</h5>
            <pre><code># 定时任务示例
import time
from datetime import datetime

def simple_scheduler(task, interval_seconds):
    """简单的定时任务调度器"""
    print(f"定时任务启动，每{interval_seconds}秒执行一次")
    try:
        while True:
            current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(f"[{current_time}] 执行任务...")
            task()
            time.sleep(interval_seconds)
    except KeyboardInterrupt:
        print("定时任务已停止")

# 示例任务
def log_data():
    """记录数据任务"""
    with open("log.txt", "a", encoding="utf-8") as f:
        f.write(f"{datetime.now()}: 日志记录\\n")
    print("日志已记录")

print("定时任务示例代码已展示")</code></pre>

            <h5>3.2 数据备份脚本</h5>
            <pre><code># 数据备份脚本示例
import os
import shutil
from datetime import datetime

def backup_files(source_dir, backup_dir, file_extensions=None):
    """备份指定类型的文件"""
    # 创建备份目录
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = os.path.join(backup_dir, f"backup_{timestamp}")
    os.makedirs(backup_path, exist_ok=True)
    
    # 备份文件
    copied_count = 0
    for root, dirs, files in os.walk(source_dir):
        for file in files:
            if file_extensions is None or file.endswith(tuple(file_extensions)):
                src_path = os.path.join(root, file)
                dest_path = os.path.join(backup_path, file)
                shutil.copy2(src_path, dest_path)
                copied_count += 1
                print(f"备份: {file}")
    
    print(f"备份完成！共备份了{copied_count}个文件")
    return backup_path

print("数据备份脚本示例已展示")</code></pre>

            <h4>四、版本控制与协作</h4>
            <p>Git是现代开发中不可或缺的版本控制工具，让我们学习其基本用法。</p>

            <h5>4.1 Git基本命令</h5>
            <pre><code># Git基本命令示例
"""
# 初始化仓库
git init

# 查看状态
git status

# 添加文件到暂存区
git add filename
git add .  # 添加所有文件

# 提交更改
git commit -m "提交信息"

# 查看提交历史
git log

# 查看远程仓库
git remote -v

# 推送到远程仓库
git push origin main

# 拉取远程更新
git pull origin main

# 分支操作
git branch          # 查看分支
git branch dev      # 创建分支
git checkout dev    # 切换分支
git merge dev       # 合并分支
"""
print("Git基本命令已展示")</code></pre>

            <h5>4.2 协作工作流程</h5>
            <div class="info-box">
                <h5>📋 Git协作工作流程</h5>
                <ol>
                    <li>拉取最新代码：git pull</li>
                    <li>创建功能分支：git checkout -b feature-new-feature</li>
                    <li>开发功能并提交：git add / git commit</li>
                    <li>推送到远程仓库：git push origin feature-new-feature</li>
                    <li>发起Pull Request进行代码审查</li>
                    <li>合并到主分支</li>
                </ol>
            </div>

            <h4>五、项目实战：简易电商数据分析平台</h4>
            <p>让我们综合应用所学知识，构建一个简易的电商数据分析平台。</p>
            <pre><code># 简易电商数据分析平台示例
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

class EcommerceAnalyticsPlatform:
    """简易电商数据分析平台"""
    
    def __init__(self):
        self.orders = self._generate_mock_data()
    
    def _generate_mock_data(self):
        """生成模拟订单数据"""
        np.random.seed(42)
        n_orders = 500
        start_date = datetime.now() - timedelta(days=90)
        
        dates = [start_date + timedelta(days=np.random.randint(0, 90)) for _ in range(n_orders)]
        products = np.random.choice(["手机", "电脑", "服装", "食品", "家居"], size=n_orders)
        quantities = np.random.randint(1, 10, size=n_orders)
        prices = np.random.randint(10, 1000, size=n_orders)
        customer_ids = np.random.randint(1, 100, size=n_orders)
        
        orders = pd.DataFrame({
            "订单ID": range(1, n_orders + 1),
            "日期": dates,
            "商品": products,
            "数量": quantities,
            "单价": prices,
            "客户ID": customer_ids
        })
        orders["总额"] = orders["数量"] * orders["单价"]
        return orders
    
    def get_sales_overview(self):
        """获取销售概览"""
        total_sales = self.orders["总额"].sum()
        total_orders = len(self.orders)
        avg_order_value = total_sales / total_orders
        
        return {
            "总销售额": total_sales,
            "总订单数": total_orders,
            "平均订单金额": avg_order_value
        }
    
    def get_product_analysis(self):
        """获取商品分析"""
        product_sales = self.orders.groupby("商品").agg({
            "总额": "sum",
            "数量": "sum",
            "订单ID": "count"
        }).sort_values("总额", ascending=False)
        product_sales.columns = ["销售总额", "销售数量", "订单数"]
        return product_sales
    
    def get_sales_trend(self):
        """获取销售趋势"""
        self.orders["日期"] = pd.to_datetime(self.orders["日期"])
        daily_sales = self.orders.groupby(self.orders["日期"].dt.date)["总额"].sum()
        return daily_sales

# 使用示例
platform = EcommerceAnalyticsPlatform()

print("销售概览:")
print(platform.get_sales_overview())

print("\\n商品分析:")
print(platform.get_product_analysis())</code></pre>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>恭喜你掌握了实用工具与工程能力！接下来，我们将提供学习路径建议，帮助你规划未来的学习方向。</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>在Python中，用于安全打开和关闭文件的关键字是？
                        <ul>
                            <li>A. open</li>
                            <li>B. with</li>
                            <li>C. file</li>
                            <li>D. read</li>
                        </ul>
                    </li>
                    <li>以下哪个不是常用的Python Web框架？
                        <ul>
                            <li>A. Flask</li>
                            <li>B. Django</li>
                            <li>C. FastAPI</li>
                            <li>D. React</li>
                        </ul>
                    </li>
                    <li>Git中用于提交更改的命令是？
                        <ul>
                            <li>A. git add</li>
                            <li>B. git commit</li>
                            <li>C. git push</li>
                            <li>D. git pull</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>使用with语句打开文件后，不需要显式关闭文件。（ ）</li>
                    <li>Flask是一个重量级的Python Web框架。（ ）</li>
                </ol>

                <h5>三、编程题</h5>
                <ol>
                    <li>编写一个脚本，将指定目录下的所有.txt文件内容合并到一个文件中。</li>
                    <li>实现一个简单的类，包含数据的读取、处理和保存功能。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第5单元：函数与模块",
        content: `
            <div class="lesson-intro">
                <h3>函数与模块</h3>
                <p>本单元将深入学习Python中的函数和模块，这是Python编程的核心概念，掌握它们将大大提高你的代码组织能力和复用性。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20functions%20and%20modules%2C%20code%20organization%2C%20colorful%20modern%20design%2C%20simple%20background&image_size=square" alt="Functions and Modules" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、函数进阶</h4>
            <p>函数是Python中组织代码的基本单位，让我们深入学习函数的高级特性。</p>

            <h5>1.1 函数参数类型</h5>
            <pre><code># 函数参数类型示例
# 1. 位置参数
def greet(name, age):
    """问候函数"""
    return f"你好，{name}！你今年{age}岁。"

# 2. 默认参数
def greet_with_default(name, age=18):
    """带默认参数的问候函数"""
    return f"你好，{name}！你今年{age}岁。"

# 3. 可变参数

def sum_numbers(*args):
    """计算任意数量数字的和"""
    return sum(args)

# 4. 关键字参数
def print_info(**kwargs):
    """打印任意关键字参数"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# 5. 混合参数
def complex_function(a, b, *args, c=10, **kwargs):
    """混合参数示例"""
    print(f"a: {a}, b: {b}, c: {c}")
    print(f"可变参数: {args}")
    print(f"关键字参数: {kwargs}")

# 调用示例
print(greet("李艺", 18))
print(greet_with_default("李艺"))
print(sum_numbers(1, 2, 3, 4, 5))
print_info(name="李艺", age=18, major="商务数据分析")
complex_function(1, 2, 3, 4, 5, c=20, d=30, e=40)</code></pre>

            <h5>1.2 函数返回值</h5>
            <pre><code># 函数返回值示例
# 1. 返回单个值
def add(a, b):
    """返回两数之和"""
    return a + b

# 2. 返回多个值
def get_coordinates():
    """返回坐标"""
    return 10, 20, 30

# 3. 返回函数

def create_multiplier(n):
    """创建一个乘法器函数"""
    def multiplier(x):
        return x * n
    return multiplier

# 4. 返回None

def print_message(message):
    """打印消息，无返回值"""
    print(message)

# 调用示例
result = add(3, 5)
print(f"两数之和: {result}")

x, y, z = get_coordinates()
print(f"坐标: x={x}, y={y}, z={z}")

double = create_multiplier(2)
triple = create_multiplier(3)
print(f"2 * 5 = {double(5)}")
print(f"3 * 5 = {triple(5)}")

print_message("Hello, Python!")
result = print_message("Hello, Python!")
print(f"print_message返回值: {result}")</code></pre>

            <h5>1.3 函数装饰器</h5>
            <pre><code># 函数装饰器示例
# 1. 简单装饰器
def log_function(func):
    """记录函数执行的装饰器"""
    def wrapper(*args, **kwargs):
        print(f"开始执行函数: {func.__name__}")
        result = func(*args, **kwargs)
        print(f"函数执行完成: {func.__name__}")
        return result
    return wrapper

# 使用装饰器
@log_function
def add(a, b):
    return a + b

@log_function
def multiply(a, b):
    return a * b

# 2. 带参数的装饰器
def repeat(n):
    """重复执行函数n次的装饰器"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for i in range(n):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(3)
def say_hello(name):
    return f"Hello, {name}!"

# 调用示例
print(add(3, 5))
print(multiply(3, 5))
print(say_hello("李艺"))</code></pre>

            <h4>二、模块与包</h4>
            <p>模块是Python中代码组织的更高层次，让我们学习如何创建和使用模块。</p>

            <h5>2.1 模块的创建与导入</h5>
            <pre><code># 模块示例
# 创建一个名为 mymodule.py 的文件
"""
# mymodule.py

def greet(name):
    """问候函数"""
    return f"你好，{name}！"

def calculate_area(radius):
    """计算圆的面积"""
    import math
    return math.pi * radius ** 2

PI = 3.14159265359
"""

# 导入模块的方式
# 1. 导入整个模块
import mymodule
print(mymodule.greet("李艺"))
print(mymodule.calculate_area(5))
print(mymodule.PI)

# 2. 导入模块中的特定函数
from mymodule import greet, calculate_area
print(greet("李艺"))
print(calculate_area(5))

# 3. 导入模块中的所有内容
from mymodule import *
print(greet("李艺"))
print(calculate_area(5))
print(PI)

# 4. 导入时使用别名
import mymodule as mm
print(mm.greet("李艺"))
from mymodule import greet as greeting
print(greeting("李艺"))</code></pre>

            <h5>2.2 包的创建与使用</h5>
            <pre><code># 包的示例
# 创建一个名为 mypackage 的文件夹，包含 __init__.py 文件
"""
# mypackage/__init__.py
__version__ = "1.0.0"
from . import math
from . import string
"""

# 创建子模块
"""
# mypackage/math.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
"""

"""
# mypackage/string.py
def capitalize(text):
    return text.capitalize()

def reverse(text):
    return text[::-1]
"""

# 导入包
import mypackage
print(mypackage.__version__)

# 导入包中的子模块
import mypackage.math
print(mypackage.math.add(3, 5))

from mypackage import string
print(string.capitalize("hello"))

# 直接导入子模块中的函数
from mypackage.math import subtract
print(subtract(10, 3))</code></pre>

            <h5>2.3 标准库的使用</h5>
            <pre><code># 标准库使用示例
# 1. 数学模块
import math
print(f"π = {math.pi}")
print(f"√2 = {math.sqrt(2)}")
print(f"sin(π/2) = {math.sin(math.pi/2)}")

# 2. 随机模块
import random
print(f"随机整数: {random.randint(1, 100)}")
print(f"随机浮点数: {random.random()}")
print(f"随机选择: {random.choice(['苹果', '香蕉', '橙子'])}")

# 3. 时间模块
import time
print(f"当前时间戳: {time.time()}")
print(f"本地时间: {time.localtime()}")
print(f"格式化时间: {time.strftime('%Y-%m-%d %H:%M:%S')}")

# 4. 日期模块
from datetime import datetime, timedelta
print(f"当前日期时间: {datetime.now()}")
print(f"明天: {datetime.now() + timedelta(days=1)}")

# 5. 操作系统模块
import os
print(f"当前目录: {os.getcwd()}")
print(f"目录内容: {os.listdir('.')}")

# 6. 文件路径模块
import os.path
print(f"文件是否存在: {os.path.exists('example.txt')}")
print(f"是否是文件: {os.path.isfile('example.txt')}")
print(f"是否是目录: {os.path.isdir('example.txt')}")</code></pre>

            <h4>三、模块化编程实践</h4>
            <p>让我们通过一个实际项目来实践模块化编程。</p>

            <h5>3.1 项目结构设计</h5>
            <div class="info-box">
                <h5>📁 项目结构示例</h5>
                <pre><code>my_project/
├── main.py              # 主脚本
├── utils/              # 工具模块
│   ├── __init__.py
│   ├── math_utils.py   # 数学工具
│   └── string_utils.py # 字符串工具
├── data/               # 数据模块
│   ├── __init__.py
│   └── data_processor.py
└── config.py           # 配置文件</code></pre>
            </div>

            <h5>3.2 模块化项目示例</h5>
            <pre><code># 模块化项目示例
# config.py
DEBUG = True
MAX_ITERATIONS = 100

# utils/math_utils.py
def calculate_average(numbers):
    """计算平均值"""
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

def calculate_median(numbers):
    """计算中位数"""
    if not numbers:
        return 0
    sorted_numbers = sorted(numbers)
    n = len(sorted_numbers)
    if n % 2 == 0:
        return (sorted_numbers[n//2 - 1] + sorted_numbers[n//2]) / 2
    else:
        return sorted_numbers[n//2]

# utils/string_utils.py
def format_name(first_name, last_name):
    """格式化姓名"""
    return f"{last_name} {first_name}"

def is_palindrome(text):
    """判断是否是回文"""
    text = text.lower().replace(" ", "")
    return text == text[::-1]

# data/data_processor.py
import pandas as pd

def load_data(file_path):
    """加载数据"""
    try:
        return pd.read_csv(file_path)
    except Exception as e:
        print(f"加载数据失败: {e}")
        return None

def process_data(df):
    """处理数据"""
    if df is None:
        return None
    # 处理逻辑
    df = df.dropna()
    df['total'] = df['price'] * df['quantity']
    return df

# main.py
import config
from utils import math_utils, string_utils
from data import data_processor

# 测试数学工具
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(f"平均值: {math_utils.calculate_average(numbers)}")
print(f"中位数: {math_utils.calculate_median(numbers)}")

# 测试字符串工具
print(f"格式化姓名: {string_utils.format_name('艺', '李')}")
print(f"'level'是回文: {string_utils.is_palindrome('level')}")
print(f"'hello'是回文: {string_utils.is_palindrome('hello')}")

# 测试数据处理
# df = data_processor.load_data('sales.csv')
# if df is not None:
#     processed_df = data_processor.process_data(df)
#     print(processed_df.head())

print(f"调试模式: {config.DEBUG}")
print(f"最大迭代次数: {config.MAX_ITERATIONS}")</code></pre>

            <h4>四、函数式编程</h4>
            <p>函数式编程是一种编程范式，让我们学习Python中的函数式编程特性。</p>

            <h5>4.1 高阶函数</h5>
            <pre><code># 高阶函数示例
# 1. map函数
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(f"平方: {squared}")

# 2. filter函数
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(f"偶数: {even_numbers}")

# 3. reduce函数
from functools import reduce
sum_result = reduce(lambda x, y: x + y, numbers)
print(f"总和: {sum_result}")

# 4. 自定义高阶函数
def apply_operation(func, x, y):
    """应用操作"""
    return func(x, y)

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

print(f"加法: {apply_operation(add, 3, 5)}")
print(f"乘法: {apply_operation(multiply, 3, 5)}")
print(f"匿名函数加法: {apply_operation(lambda a, b: a + b, 3, 5)}")</code></pre>

            <h5>4.2 闭包与作用域</h5>
            <pre><code># 闭包与作用域示例
# 1. 闭包
def outer_function(x):
    """外部函数"""
    def inner_function(y):
        """内部函数"""
        return x + y
    return inner_function

add_five = outer_function(5)
print(f"5 + 3 = {add_five(3)}")
print(f"5 + 10 = {add_five(10)}")

# 2. 作用域
x = 10  # 全局变量

def test_scope():
    x = 20  # 局部变量
    print(f"局部变量x: {x}")
    
    def inner_scope():
        nonlocal x  # 非局部变量
        x = 30
        print(f"内部函数x: {x}")
    
    inner_scope()
    print(f"局部变量x after inner: {x}")

test_scope()
print(f"全局变量x: {x}")</code></pre>

            <h5>4.3 装饰器的实际应用</h5>
            <pre><code># 装饰器实际应用示例
# 1. 计时装饰器
import time
def timer(func):
    """计算函数执行时间的装饰器"""
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} 执行时间: {end_time - start_time:.4f}秒")
        return result
    return wrapper

@timer
def slow_function():
    """慢函数"""
    time.sleep(1)
    return "完成"

# 2. 缓存装饰器
from functools import lru_cache

@lru_cache(maxsize=100)
def fibonacci(n):
    """斐波那契数列"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 调用示例
print(slow_function())
print(f"fibonacci(30) = {fibonacci(30)}")
print(f"fibonacci(35) = {fibonacci(35)}")</code></pre>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>恭喜你掌握了函数与模块的核心知识！这些概念是Python编程的基础，也是构建大型应用的关键。接下来，我们将对整个Python课程进行总结，帮助你回顾所学内容并规划未来的学习方向。</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个是Python中定义函数的关键字？
                        <ul>
                            <li>A. function</li>
                            <li>B. def</li>
                            <li>C. func</li>
                            <li>D. define</li>
                        </ul>
                    </li>
                    <li>Python中用于导入模块的关键字是？
                        <ul>
                            <li>A. include</li>
                            <li>B. import</li>
                            <li>C. from</li>
                            <li>D. require</li>
                        </ul>
                    </li>
                    <li>以下哪个不是Python的标准库？
                        <ul>
                            <li>A. math</li>
                            <li>B. random</li>
                            <li>C. pandas</li>
                            <li>D. os</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>Python函数可以返回多个值。（ ）</li>
                    <li>装饰器可以修改函数的行为而不改变函数本身的代码。（ ）</li>
                </ol>

                <h5>三、编程题</h5>
                <ol>
                    <li>编写一个函数，接受任意数量的参数，返回它们的平均值。</li>
                    <li>创建一个装饰器，用于记录函数的调用次数。</li>
                    <li>创建一个简单的模块，包含几个常用的数学函数，然后在另一个脚本中导入并使用它。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第6单元：Python课程总结",
        content: `
            <div class="lesson-intro">
                <h3>Python课程总结</h3>
                <p>本单元将对整个Python课程进行全面总结，帮助你回顾所学内容，梳理知识体系，并为未来的学习和职业发展提供指导。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20course%20summary%20knowledge%20map%2C%20colorful%20modern%20design%2C%20simple%20background&image_size=square" alt="Course Summary" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、课程内容回顾</h4>
            <p>让我们回顾一下整个课程的内容，梳理知识体系。</p>

            <h5>1.1 知识框架</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>第1单元：Python核心基础</h5>
                    <ul>
                        <li>基础语法与数据类型</li>
                        <li>条件语句与循环</li>
                        <li>数据结构（列表、元组、字典、集合）</li>
                        <li>面向对象编程基础</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>第2单元：数据处理与分析</h5>
                    <ul>
                        <li>NumPy基础</li>
                        <li>Pandas数据处理</li>
                        <li>数据可视化（Matplotlib、Seaborn）</li>
                        <li>电商数据分析案例</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h5>第3单元：AI基础与应用</h5>
                    <ul>
                        <li>AI基础概念</li>
                        <li>机器学习基础</li>
                        <li>Scikit-learn实践</li>
                        <li>电商场景AI应用</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🛠️</div>
                    <h5>第4单元：实用工具与工程能力</h5>
                    <ul>
                        <li>文件操作与异常处理</li>
                        <li>Web开发基础（Flask）</li>
                        <li>自动化工具</li>
                        <li>Git版本控制</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📦</div>
                    <h5>第5单元：函数与模块</h5>
                    <ul>
                        <li>函数进阶（参数类型、返回值）</li>
                        <li>装饰器</li>
                        <li>模块与包的创建和使用</li>
                        <li>函数式编程</li>
                    </ul>
                </div>
            </div>

            <h5>1.2 核心技能图谱</h5>
            <div class="info-box">
                <h5>🧠 Python技能图谱</h5>
                <pre><code># Python技能层级
┌─────────────────────────────────────────────────────────────┐
│                      高级技能                              │
│  - 深度学习与神经网络                                      │
│  - 大数据处理与分析                                        │
│  - 分布式系统开发                                          │
│  - 专业领域应用（金融、医疗、电商等）                      │
├─────────────────────────────────────────────────────────────┤
│                      中级技能                              │
│  - 机器学习算法与应用                                      │
│  - 数据可视化与仪表盘开发                                  │
│  - Web应用开发                                             │
│  - 自动化脚本与工具开发                                    │
│  - 模块化与面向对象编程                                    │
├─────────────────────────────────────────────────────────────┤
│                      基础技能                              │
│  - Python语法与数据类型                                    │
│  - 控制流与函数                                            │
│  - 数据结构与算法基础                                      │
│  - 文件操作与异常处理                                      │
│  - 模块与包的使用                                          │
└─────────────────────────────────────────────────────────────┘</code></pre>
            </div>

            <h4>二、学习方法与技巧</h4>
            <p>有效的学习方法是成功掌握Python的关键，让我们分享一些实用的学习技巧。</p>

            <h5>2.1 高效学习方法</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔄</div>
                    <h5>实践为主</h5>
                    <p>理论学习与实践相结合，多动手编写代码，通过项目巩固知识</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h5>记笔记</h5>
                    <p>记录重要概念和代码示例，建立自己的知识库</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h5>查阅文档</h5>
                    <p>学会使用官方文档和搜索引擎解决问题</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤝</div>
                    <h5>社区交流</h5>
                    <p>参与Python社区，向他人学习，分享自己的知识</p>
                </div>
            </div>

            <h5>2.2 常见学习误区</h5>
            <div class="info-box">
                <h5>⚠️ 学习误区</h5>
                <ol>
                    <li><strong>只看视频不实践</strong> - 编程是技能，需要通过实践掌握</li>
                    <li><strong>追求完美代码</strong> - 先完成再优化，不要过度纠结代码风格</li>
                    <li><strong>忽视基础</strong> - 扎实的基础是进阶的前提</li>
                    <li><strong>害怕错误</strong> - 错误是学习的机会，学会调试和解决问题</li>
                    <li><strong>学习路径混乱</strong> - 制定合理的学习计划，循序渐进</li>
                </ol>
            </div>

            <h4>三、职业发展方向</h4>
            <p>Python的应用领域广泛，为你提供了多种职业发展选择。</p>

            <h5>3.1 主要职业方向</h5>
            <table class="operator-table">
                <tr>
                    <th>职业方向</th>
                    <th>核心技能</th>
                    <th>工作内容</th>
                </tr>
                <tr>
                    <td>数据分析师</td>
                    <td>Python、Pandas、数据可视化、SQL</td>
                    <td>数据清洗、分析、可视化，提供业务洞察</td>
                </tr>
                <tr>
                    <td>数据科学家</td>
                    <td>机器学习、深度学习、统计学、大数据</td>
                    <td>构建预测模型、推荐系统、数据挖掘</td>
                </tr>
                <tr>
                    <td>Python开发工程师</td>
                    <td>Web开发、API开发、自动化、测试</td>
                    <td>开发Web应用、后端服务、自动化工具</td>
                </tr>
                <tr>
                    <td>AI工程师</td>
                    <td>深度学习、神经网络、TensorFlow/PyTorch</td>
                    <td>开发AI模型、训练和部署</td>
                </tr>
                <tr>
                    <td>DevOps工程师</td>
                    <td>自动化、容器化、CI/CD、云计算</td>
                    <td>构建和维护基础设施，自动化部署</td>
                </tr>
            </table>

            <h5>3.2 电商领域的Python应用</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h5>销售数据分析</h5>
                    <p>分析销售趋势、用户行为、商品表现</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h5>推荐系统</h5>
                    <p>基于用户行为推荐商品，提高转化率</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h5>客服机器人</h5>
                    <p>自动化客户服务，提高效率</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h5>库存管理</h5>
                    <p>预测需求，优化库存水平</p>
                </div>
            </div>

            <h4>四、项目实战建议</h4>
            <p>通过项目实战可以巩固所学知识，建立作品集，为求职加分。</p>

            <h5>4.1 推荐项目</h5>
            <div class="info-box">
                <h5>💡 实战项目建议</h5>
                <ol>
                    <li><strong>个人博客系统</strong> - 使用Flask/Django开发，包含文章管理、评论功能</li>
                    <li><strong>数据分析仪表盘</strong> - 使用Pandas和Dash/Streamlit开发交互式仪表盘</li>
                    <li><strong>电商数据分析工具</strong> - 分析销售数据，生成报告和可视化</li>
                    <li><strong>简单的推荐系统</strong> - 基于协同过滤或内容过滤实现</li>
                    <li><strong>自动化工具</strong> - 如文件整理、数据备份、邮件发送等</li>
                    <li><strong>小游戏</strong> - 如贪吃蛇、猜数字等，练习基础编程</li>
                </ol>
            </div>

            <h5>4.2 项目开发流程</h5>
            <pre><code># 项目开发流程
1. 需求分析 - 明确项目目标和功能
2. 设计架构 - 确定技术栈和项目结构
3. 开发实现 - 编写代码，实现功能
4. 测试调试 - 确保功能正常，修复bug
5. 部署上线 - 发布项目，收集反馈
6. 维护更新 - 根据反馈持续改进</code></pre>

            <h4>五、学习资源推荐</h4>
            <p>持续学习是保持竞争力的关键，以下是一些优质的学习资源。</p>

            <h5>5.1 书籍推荐</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>入门书籍</h5>
                    <ul>
                        <li>《Python编程：从入门到实践》</li>
                        <li>《Python基础教程》</li>
                        <li>《笨办法学Python》</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>进阶书籍</h5>
                    <ul>
                        <li>《流畅的Python》</li>
                        <li>《Python Cookbook》</li>
                        <li>《Effective Python》</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>数据分析</h5>
                    <ul>
                        <li>《利用Python进行数据分析》</li>
                        <li>《Python数据科学手册》</li>
                        <li>《统计学习方法》</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>Web开发</h5>
                    <ul>
                        <li>《Flask Web开发》</li>
                        <li>《Django实战》</li>
                        <li>《RESTful Web APIs》</li>
                    </ul>
                </div>
            </div>

            <h5>5.2 在线资源</h5>
            <table class="operator-table">
                <tr>
                    <th>平台</th>
                    <th>特点</th>
                    <th>推荐内容</th>
                </tr>
                <tr>
                    <td>Python官方文档</td>
                    <td>最权威的参考资料</td>
                    <td>语言参考、标准库文档</td>
                </tr>
                <tr>
                    <td>Stack Overflow</td>
                    <td>解决编程问题的社区</td>
                    <td>搜索和提问编程问题</td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td>代码托管和开源项目</td>
                    <td>学习优秀开源项目</td>
                </tr>
                <tr>
                    <td>Kaggle</td>
                    <td>数据科学竞赛平台</td>
                    <td>参与竞赛，学习数据分析</td>
                </tr>
                <tr>
                    <td>LeetCode</td>
                    <td>算法练习平台</td>
                    <td>提升编程能力</td>
                </tr>
                <tr>
                    <td>慕课网</td>
                    <td>中文视频课程</td>
                    <td>Python相关课程</td>
                </tr>
                <tr>
                    <td>Coursera/edX</td>
                    <td>国际名校课程</td>
                    <td>数据科学、AI相关课程</td>
                </tr>
            </table>

            <h4>六、未来学习规划</h4>
            <p>制定合理的学习规划，持续提升自己的Python技能。</p>

            <h5>6.1 短期规划（1-3个月）</h5>
            <div class="info-box">
                <h5>🎯 短期目标</h5>
                <ul>
                    <li>巩固Python基础，掌握核心概念</li>
                    <li>完成1-2个小型项目，实践所学知识</li>
                    <li>学习版本控制（Git）和代码管理</li>
                    <li>熟悉常用的Python库和工具</li>
                </ul>
            </div>

            <h5>6.2 中期规划（3-6个月）</h5>
            <div class="info-box">
                <h5>🎯 中期目标</h5>
                <ul>
                    <li>深入学习数据分析或Web开发方向</li>
                    <li>完成一个中等规模的项目</li>
                    <li>学习更高级的Python特性（如装饰器、生成器）</li>
                    <li>建立个人作品集，准备求职</li>
                </ul>
            </div>

            <h5>6.3 长期规划（6-12个月）</h5>
            <div class="info-box">
                <h5>🎯 长期目标</h5>
                <ul>
                    <li>专精于某个领域（如数据科学、Web开发、AI）</li>
                    <li>参与开源项目或社区贡献</li>
                    <li>获得相关认证或证书</li>
                    <li>在专业领域内建立个人品牌</li>
                </ul>
            </div>

            <div class="next-step">
                <h5>🎉 课程结语</h5>
                <p>恭喜你完成了整个Python课程的学习！这是你编程之旅的开始，而不是结束。Python是一种功能强大、应用广泛的编程语言，掌握它将为你的职业发展打开更多可能性。</p>
                <p>记住：编程是一项需要持续学习和实践的技能。保持好奇心，不断挑战自己，你一定会在Python的世界中找到属于自己的位置。</p>
                <p>祝你学习顺利，前程似锦！</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个不是Python的应用领域？
                        <ul>
                            <li>A. 数据分析</li>
                            <li>B. Web开发</li>
                            <li>C. 移动应用开发</li>
                            <li>D. 机器学习</li>
                        </ul>
                    </li>
                    <li>Python中用于创建虚拟环境的工具是？
                        <ul>
                            <li>A. venv</li>
                            <li>B. virtualenv</li>
                            <li>C. conda</li>
                            <li>D. 以上都是</li>
                        </ul>
                    </li>
                    <li>以下哪个不是Python的优势？
                        <ul>
                            <li>A. 语法简洁易读</li>
                            <li>B. 执行速度快</li>
                            <li>C. 丰富的库生态</li>
                            <li>D. 跨平台兼容性</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、简答题</h5>
                <ol>
                    <li>请简述Python的主要特点和优势。</li>
                    <li>请列出你在本课程中学到的最重要的三个知识点，并说明为什么它们很重要。</li>
                </ol>

                <h5>三、实践题</h5>
                <ol>
                    <li>根据本课程所学内容，设计一个小型项目，并说明你的实现思路。</li>
                    <li>制定一个为期3个月的Python学习计划，包括学习内容、实践项目和目标。</li>
                </ol>
            </div>
        `
    }
];


let currentLessonIndex = -1;

// 从URL参数加载课程
function loadLessonFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    if (lessonParam && !isNaN(lessonParam)) {
        const lessonIndex = parseInt(lessonParam);
        if (lessonIndex >= 0 && lessonIndex < lessons.length) {
            showLesson(lessonIndex);
        }
    }
}

// 页面加载时执行
window.onload = loadLessonFromUrl;

function showLesson(index) {
    currentLessonIndex = index;
    const lesson = lessons[index];
    
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-content').innerHTML = lesson.content;
    
    document.getElementById('lessons-section').classList.add('hidden');
    document.getElementById('lesson-detail-section').classList.remove('hidden');
    
    updateNavButtons();
    window.scrollTo(0, 0);
}

function showLessonsList() {
    currentLessonIndex = -1;
    document.getElementById('lesson-detail-section').classList.add('hidden');
    document.getElementById('lessons-section').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        showLesson(currentLessonIndex - 1);
    }
}

function nextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
        showLesson(currentLessonIndex + 1);
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.style.visibility = currentLessonIndex > 0 ? 'visible' : 'hidden';
    nextBtn.style.visibility = currentLessonIndex < lessons.length - 1 ? 'visible' : 'hidden';
}