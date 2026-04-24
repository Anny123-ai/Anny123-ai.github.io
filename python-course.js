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
        title: "第5单元：学习路径建议",
        content: `
            <div class="lesson-intro">
                <h3>学习路径建议</h3>
                <p>恭喜你完成了前面的学习！本单元将为你提供系统的学习路径建议，帮助你规划未来的学习方向，成为优秀的数据分析师或相关领域的专业人才。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=learning%20path%20roadmap%20career%20development%2C%20colorful%2C%20modern%20design%2C%20simple%20background&image_size=square" alt="Learning Path" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>一、职业发展方向</h4>
            <p>基于你所学的知识，以下是几个主要的职业发展方向供你参考。</p>

            <h5>1.1 数据分析师</h5>
            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h5>数据分析师</h5>
                <p>负责收集、清洗、分析数据，为业务决策提供支持</p>
                <ul>
                    <li>核心技能：数据清洗、数据分析、数据可视化</li>
                    <li>核心工具：Python、SQL、Excel、Tableau/Power BI</li>
                    <li>工作场景：电商、金融、互联网等各行业</li>
                </ul>
            </div>

            <h5>1.2 数据科学家</h5>
            <div class="feature-card">
                <div class="feature-icon">🔬</div>
                <h5>数据科学家</h5>
                <p>运用机器学习、统计学等高级方法解决复杂的数据问题</p>
                <ul>
                    <li>核心技能：机器学习、深度学习、统计学</li>
                    <li>核心工具：Python、TensorFlow/PyTorch、大数据技术</li>
                    <li>工作场景：互联网大厂、金融机构、科技公司</li>
                </ul>
            </div>

            <h5>1.3 商业智能工程师</h5>
            <div class="feature-card">
                <div class="feature-icon">💼</div>
                <h5>商业智能工程师</h5>
                <p>构建数据仓库、设计数据可视化仪表盘，支持业务决策</p>
                <ul>
                    <li>核心技能：数据建模、ETL、数据可视化</li>
                    <li>核心工具：SQL、Tableau、Power BI、大数据工具</li>
                    <li>工作场景：企业IT部门、咨询公司</li>
                </ul>
            </div>

            <h4>二、分阶段学习路径</h4>
            <p>以下是一个系统的学习路径建议，帮助你逐步提升自己的技能。</p>

            <h5>2.1 初级阶段（第1-3个月）</h5>
            <div class="info-box">
                <h5>🎯 初级阶段目标</h5>
                <ul>
                    <li>✅ 掌握Python核心语法和数据结构</li>
                    <li>✅ 熟悉NumPy和Pandas基础操作</li>
                    <li>✅ 能够进行简单的数据处理和分析</li>
                    <li>✅ 掌握基础的数据可视化技能</li>
                    <li>✅ 学习SQL基础</li>
                </ul>
                <h5>📚 学习资源推荐</h5>
                <ul>
                    <li>《Python编程：从入门到实践》</li>
                    <li>《利用Python进行数据分析》</li>
                    <li>LeetCode简单题目练习</li>
                </ul>
            </div>

            <h5>2.2 中级阶段（第4-6个月）</h5>
            <div class="info-box">
                <h5>🎯 中级阶段目标</h5>
                <ul>
                    <li>✅ 深入学习数据处理和分析技巧</li>
                    <li>✅ 掌握机器学习基础算法和应用</li>
                    <li>✅ 学习统计学基础知识</li>
                    <li>✅ 能够完成完整的数据分析项目</li>
                    <li>✅ 学习基础的数据仓库和ETL知识</li>
                </ul>
                <h5>📚 学习资源推荐</h5>
                <ul>
                    <li>《统计学习方法》</li>
                    <li>《机器学习实战》</li>
                    <li>Kaggle入门竞赛</li>
                    <li>各大高校公开课程</li>
                </ul>
            </div>

            <h5>2.3 高级阶段（第7-12个月）</h5>
            <div class="info-box">
                <h5>🎯 高级阶段目标</h5>
                <ul>
                    <li>✅ 深入学习机器学习和深度学习</li>
                    <li>✅ 了解大数据技术基础</li>
                    <li>✅ 积累实战项目经验</li>
                    <li>✅ 培养业务理解和问题解决能力</li>
                    <li>✅ 构建个人作品集</li>
                </ul>
                <h5>📚 学习资源推荐</h5>
                <ul>
                    <li>《深度学习》</li>
                    <li>《设计数据密集型应用》</li>
                    <li>Kaggle竞赛实战</li>
                    <li>GitHub开源项目</li>
                </ul>
            </div>

            <h4>三、电商数据分析专项学习</h4>
            <p>基于你的专业背景，以下是电商数据分析领域的专项学习建议。</p>

            <h5>3.1 电商数据分析核心指标</h5>
            <table class="operator-table">
                <tr>
                    <th>指标类别</th>
                    <th>核心指标</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>用户指标</td>
                    <td>DAU、MAU、新增用户、用户留存率</td>
                    <td>衡量用户规模和活跃程度</td>
                </tr>
                <tr>
                    <td>转化指标</td>
                    <td>浏览转化率、加购率、支付转化率</td>
                    <td>衡量转化漏斗效率</td>
                </tr>
                <tr>
                    <td>销售指标</td>
                    <td>GMV、客单价、复购率</td>
                    <td>衡量销售表现</td>
                </tr>
                <tr>
                    <td>商品指标</td>
                    <td>动销率、库存周转、滞销品分析</td>
                    <td>衡量商品表现</td>
                </tr>
            </table>

            <h5>3.2 电商数据分析实战项目建议</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h5>项目1：用户行为分析</h5>
                    <p>分析用户浏览、点击、购买等行为，构建用户画像</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🛒</div>
                    <h5>项目2：商品销售分析</h5>
                    <p>分析商品销售表现，识别热销品和滞销品</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💡</div>
                    <h5>项目3：推荐系统实现</h5>
                    <p>基于用户行为数据构建简单的推荐系统</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📉</div>
                    <h5>项目4：A/B测试分析</h5>
                    <p>设计和分析A/B测试结果，评估产品改进效果</p>
                </div>
            </div>

            <h4>四、实用学习方法与资源</h4>
            <p>学习方法和资源选择同样重要，以下是一些实用的建议。</p>

            <h5>4.1 高效学习方法</h5>
            <div class="info-box">
                <h5>💡 学习技巧</h5>
                <ol>
                    <li><strong>理论与实践并重</strong>：学习理论的同时多动手实践</li>
                    <li><strong>项目驱动学习</strong>：通过完成项目来巩固知识</li>
                    <li><strong>刻意练习</strong>：针对薄弱环节进行有目的的练习</li>
                    <li><strong>持续学习</strong>：技术更新很快，保持学习的习惯</li>
                    <li><strong>输出倒逼输入</strong>：通过写博客、分享等方式巩固知识</li>
                </ol>
            </div>

            <h5>4.2 在线学习平台推荐</h5>
            <table class="operator-table">
                <tr>
                    <th>平台名称</th>
                    <th>特点</th>
                    <th>推荐课程</th>
                </tr>
                <tr>
                    <td>慕课网</td>
                    <td>中文课程丰富，实战导向</td>
                    <td>Python数据分析、机器学习</td>
                </tr>
                <tr>
                    <td> Coursera/edX</td>
                    <td>国际名校课程，质量高</td>
                    <td>Andrew Ng机器学习、数据科学专项课</td>
                </tr>
                <tr>
                    <td>Kaggle</td>
                    <td>实战平台，有真实数据</td>
                    <td>参与竞赛，学习他人方案</td>
                </tr>
                <tr>
                    <td>LeetCode</td>
                    <td>编程练习平台</td>
                    <li>刷题提升编程能力</li>
                </tr>
            </table>

            <h5>4.3 重要工具与技术栈</h5>
            <pre><code># 数据分析师技术栈总结
"""
# 编程语言
- Python（核心）
- SQL（必备）
- R（可选加分项）

# 数据处理与分析
- NumPy, Pandas
- Excel高级功能

# 数据可视化
- Matplotlib, Seaborn
- Tableau, Power BI

# 机器学习
- Scikit-learn
- TensorFlow/PyTorch（进阶）

# 数据库
- MySQL, PostgreSQL
- MongoDB（可选）

# 大数据技术（进阶）
- Hadoop, Spark
- Hive, Flink

# 开发工具
- Git, GitHub
- Jupyter Notebook/Lab
- PyCharm/VS Code
"""
print("技术栈总结已展示")</code></pre>

            <h4>五、职业准备与面试建议</h4>
            <p>最后，让我们谈谈如何为未来的职业发展做好准备。</p>

            <h5>5.1 构建个人作品集</h5>
            <div class="info-box">
                <h5>📁 作品集建议</h5>
                <ul>
                    <li><strong>GitHub仓库</strong>：整理你的学习项目和代码</li>
                    <li><strong>数据分析报告</strong>：展示你的数据分析能力</li>
                    <li><strong>项目README</strong>：清晰说明项目目的、方法和结果</li>
                    <li><strong>个人博客</strong>：分享学习心得和技术文章</li>
                    <li><strong>可视化作品</strong>：展示你的数据可视化能力</li>
                </ul>
            </div>

            <h5>5.2 面试准备要点</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">💻</div>
                    <h5>技术面试</h5>
                    <ul>
                        <li>Python编程题</li>
                        <li>SQL查询题</li>
                        <li>统计和机器学习基础</li>
                        <li>数据结构与算法</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💬</div>
                    <h5>行为面试</h5>
                    <ul>
                        <li>项目经历</li>
                        <li>解决问题的能力</li>
                        <li>团队协作能力</li>
                        <li>学习能力</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h5>案例分析</h5>
                    <ul>
                        <li>业务场景分析</li>
                        <li>指标设计能力</li>
                        <li>逻辑思维</li>
                        <li>沟通表达</li>
                    </ul>
                </div>
            </div>

            <h4>六、寄语与鼓励</h4>
            <div class="success-box">
                <h5>🌟 最后想说的话</h5>
                <p>亲爱的李艺同学，恭喜你完成了这一系列课程的学习！学习编程和数据分析是一条漫长但充满乐趣的道路。</p>
                <p>在这个过程中，你可能会遇到困难和挫折，但请记住：</p>
                <ul>
                    <li>💪 坚持就是胜利，每天进步一点点</li>
                    <li>🚀 实践出真知，多做项目多动手</li>
                    <li>🤝 学会利用资源，主动寻求帮助</li>
                    <li>💡 保持好奇心，持续学习新技术</li>
                </ul>
                <p>相信在不久的将来，你一定会成为一名优秀的商务数据分析师，在电商领域大放异彩！</p>
                <p>祝你学习顺利，前程似锦！</p>
            </div>

            <div class="next-step">
                <h5>🎉 课程总结</h5>
                <p>恭喜你完成了全部课程！这不是结束，而是新的开始。希望你能把所学知识应用到实践中，不断成长和进步。</p>
                <p>记住：代码改变世界，数据创造价值！</p>
            </div>

            <h4>单元练习</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个不是数据分析师的核心技能？
                        <ul>
                            <li>A. 数据清洗</li>
                            <li>B. 数据可视化</li>
                            <li>C. 前端开发</li>
                            <li>D. SQL</li>
                        </ul>
                    </li>
                    <li>电商数据分析中，GMV指的是？
                        <ul>
                            <li>A. 日活跃用户数</li>
                            <li>B. 商品交易总额</li>
                            <li>C. 用户留存率</li>
                            <li>D. 转化率</li>
                        </ul>
                    </li>
                    <li>以下哪个平台以数据科学竞赛著称？
                        <ul>
                            <li>A. GitHub</li>
                            <li>B. LeetCode</li>
                            <li>C. Kaggle</li>
                            <li>D. Stack Overflow</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、简答题</h5>
                <ol>
                    <li>请列出你认为数据分析师最重要的三个能力，并说明理由。</li>
                    <li>根据你自己的情况，制定一个为期6个月的学习计划。</li>
                </ol>

                <h5>三、实践题</h5>
                <ol>
                    <li>尝试在GitHub上创建一个仓库，整理你之前的学习项目。</li>
                    <li>为自己设计一个个人作品集的初步方案。</li>
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