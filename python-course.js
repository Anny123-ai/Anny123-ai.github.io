const lessons = [
    {
        title: "第1课：Python 介绍与安装",
        content: `
            <div class="lesson-intro">
                <h3>欢迎来到 Python 世界！</h3>
                <p>这是你学习 Python 编程的第一堂课，我们将一起了解 Python 是什么，以及如何在你的电脑上安装它。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20language%20logo%20with%20snake%20symbol%2C%20colorful%2C%20friendly%20design%2C%20simple%20background&image_size=square" alt="Python Logo" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>什么是 Python？</h4>
            <p>Python 是一种<strong>高级、解释型、通用</strong>的编程语言。它的设计哲学强调代码的可读性，使用显著的缩进，让代码看起来更加整洁美观。</p>
            
            <div class="info-box">
                <h5>为什么叫 Python？</h5>
                <p>Python 的名字来源于英国喜剧团体 Monty Python，而不是蛇哦！创始人 Guido van Rossum 希望这门语言能够有趣且易于使用。</p>
            </div>

            <h4>Python 的特点</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h5>简单易学</h5>
                    <p>语法简洁明了，接近自然语言，非常适合初学者</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h5>免费开源</h5>
                    <p>完全免费使用，源代码开放，社区活跃</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌍</div>
                    <h5>跨平台</h5>
                    <p>可以在 Windows、Mac、Linux 等多种操作系统上运行</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>丰富的库</h5>
                    <p>拥有大量现成的库，可以轻松实现各种功能</p>
                </div>
            </div>

            <h4>Python 能做什么？</h4>
            <ul>
                <li><strong>Web 开发</strong>：使用 Django、Flask 等框架</li>
                <li><strong>数据分析</strong>：使用 Pandas、NumPy 等库</li>
                <li><strong>人工智能</strong>：使用 TensorFlow、PyTorch 等库</li>
                <li><strong>自动化脚本</strong>：简化日常工作</li>
                <li><strong>游戏开发</strong>：使用 Pygame 等库</li>
                <li><strong>科学计算</strong>：解决复杂的数学问题</li>
            </ul>

            <h4>安装 Python（详细步骤）</h4>
            
            <h5>步骤 1：下载 Python</h5>
            <ol>
                <li>打开浏览器，访问 <a href="https://www.python.org/downloads/" target="_blank">python.org/downloads</a></li>
                <li>网站会自动检测你的操作系统，并推荐适合的版本</li>
                <li>点击「Download Python XXX」按钮（XXX 是版本号）</li>
            </ol>

            <h5>步骤 2：安装 Python（Windows）</h5>
            <ol>
                <li>双击下载的安装文件</li>
                <li><strong>重要</strong>：勾选「Add Python XXX to PATH」选项</li>
                <li>点击「Install Now」按钮</li>
                <li>等待安装完成，点击「Close」按钮</li>
            </ol>

            <h5>步骤 2：安装 Python（Mac）</h5>
            <ol>
                <li>双击下载的 .pkg 文件</li>
                <li>按照安装向导的提示进行操作</li>
                <li>输入管理员密码（如果需要）</li>
                <li>等待安装完成</li>
            </ol>

            <h5>步骤 2：安装 Python（Linux）</h5>
            <p>大多数 Linux 发行版已经预装了 Python，你可以直接使用。如果需要更新版本，可以使用包管理器：</p>
            <pre><code># Ubuntu/Debian
sudo apt update
sudo apt install python3

# CentOS/RHEL
sudo yum install python3</code></pre>

            <h4>验证安装</h4>
            <h5>方法 1：使用命令行</h5>
            <p>打开终端或命令提示符，输入以下命令：</p>
            <pre><code>python --version</code></pre>
            <p>或者在某些系统上：</p>
            <pre><code>python3 --version</code></pre>
            <p>如果显示 Python 版本号，说明安装成功！</p>

            <h5>方法 2：使用 Python 解释器</h5>
            <p>在终端中输入：</p>
            <pre><code>python</code></pre>
            <p>你应该会看到 Python 解释器的欢迎信息，显示版本号。输入 <code>exit()</code> 可以退出解释器。</p>

            <div class="success-box">
                <h5>🎉 安装成功！</h5>
                <p>恭喜你已经成功安装了 Python！现在你可以开始编写你的第一个 Python 程序了。</p>
            </div>

            <h4>第一个 Python 程序</h4>
            <p>让我们编写一个简单的程序来验证一切正常工作：</p>
            <pre><code>print("Hello, Python!")
print("欢迎来到 Python 编程世界！")</code></pre>

            <h5>如何运行这个程序</h5>
            <ol>
                <li>打开文本编辑器（如记事本、VS Code 等）</li>
                <li>复制上面的代码并保存为 <code>hello.py</code></li>
                <li>在终端中导航到文件所在的目录</li>
                <li>输入命令：<code>python hello.py</code></li>
                <li>你应该会看到程序输出的文字</li>
            </ol>

            <h4>常见问题与解决方案</h4>
            <div class="faq">
                <h5>Q: 安装后在命令行中输入 <code>python</code> 显示「命令未找到」</h5>
                <p>A: 这可能是因为 Python 没有添加到系统 PATH 中。你可以重新运行安装程序，确保勾选「Add Python to PATH」选项，或者手动将 Python 安装目录添加到 PATH 中。</p>
                
                <h5>Q: 运行程序时出现语法错误</h5>
                <p>A: 检查你的代码是否正确，特别是缩进和标点符号。Python 对缩进非常严格。</p>
                
                <h5>Q: 我应该安装哪个版本的 Python？</h5>
                <p>A: 建议安装最新的稳定版本（Python 3.x）。Python 2.x 已经不再维护，不推荐使用。</p>
            </div>

            <h4>小结</h4>
            <ul>
                <li>Python 是一种简单易学、功能强大的编程语言</li>
                <li>它可以在各种操作系统上运行</li>
                <li>安装 Python 非常简单，只需几个步骤</li>
                <li>你已经成功安装了 Python 并运行了第一个程序</li>
            </ul>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>现在你已经准备好开始学习 Python 的基础语法了。下一课我们将学习变量、数据类型和基本运算符。</p>
            </div>
        `
    },
    {
        title: "第2课：Python 基础语法",
        content: `
            <h4>变量与数据类型</h4>
            <ul>
                <li><strong>整数 (int)</strong>：如 1, 100, -5</li>
                <li><strong>浮点数 (float)</strong>：如 3.14, 2.0, -0.5</li>
                <li><strong>字符串 (str)</strong>：如 "Hello", 'Python'</li>
                <li><strong>布尔值 (bool)</strong>：True 或 False</li>
                <li><strong>空值 (None)</strong>：表示没有值</li>
            </ul>
            
            <h4>运算符</h4>
            <ul>
                <li><strong>算术运算符</strong>：+, -, *, /, %, **</li>
                <li><strong>比较运算符</strong>：==, !=, >, <, >=, <=</li>
                <li><strong>逻辑运算符</strong>：and, or, not</li>
            </ul>
            
            <h4>条件语句</h4>
            <pre><code>if 条件:
    # 条件为真时执行
elif 另一个条件:
    # 另一个条件为真时执行
else:
    # 所有条件都为假时执行</code></pre>
            
            <h4>循环语句</h4>
            <pre><code># for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
        `
    },
    {
        title: "第3课：数据结构",
        content: `
            <h4>列表 (List)</h4>
            <p>列表是Python中最常用的数据结构，用于存储多个元素。</p>
            <pre><code># 创建列表
fruits = ["苹果", "香蕉", "橙子"]

# 访问元素
print(fruits[0])  # 苹果

# 添加元素
fruits.append("葡萄")

# 修改元素
fruits[1] = "梨"

# 删除元素
del fruits[2]</code></pre>
            
            <h4>元组 (Tuple)</h4>
            <p>元组是不可变的序列。</p>
            <pre><code># 创建元组
point = (10, 20)

# 访问元素
print(point[0])  # 10</code></pre>
            
            <h4>字典 (Dictionary)</h4>
            <p>字典用于存储键值对。</p>
            <pre><code># 创建字典
person = {"name": "张三", "age": 25, "city": "北京"}

# 访问值
print(person["name"])  # 张三

# 添加或修改
person["job"] = "工程师"

# 删除
del person["age"]</code></pre>
            
            <h4>集合 (Set)</h4>
            <p>集合用于存储唯一元素。</p>
            <pre><code># 创建集合
numbers = {1, 2, 3, 4, 5}

# 添加元素
numbers.add(6)

# 移除元素
numbers.remove(3)</code></pre>
        `
    },
    {
        title: "第4课：函数与模块",
        content: `
            <h4>函数定义与调用</h4>
            <pre><code>def greet(name):
    """函数文档字符串"""
    return f"你好，{name}！"

# 调用函数
print(greet("张三"))</code></pre>
            
            <h4>函数参数</h4>
            <pre><code># 默认参数
def power(x, n=2):
    return x ** n

# 关键字参数
print(power(n=3, x=2))  # 8

# 可变参数
def sum_numbers(*args):
    return sum(args)

# 关键字可变参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")</code></pre>
            
            <h4>模块</h4>
            <pre><code># 导入模块
import math

# 使用模块中的函数
print(math.sqrt(16))  # 4.0

# 导入特定函数
from math import pi, sin

# 导入所有函数
from math import *</code></pre>
            
            <h4>创建模块</h4>
            <p>创建一个.py文件，然后在其他文件中导入它。</p>
            <pre><code># mymodule.py
def say_hello():
    print("Hello from my module!")

# 在其他文件中导入
import mymodule
mymodule.say_hello()</code></pre>
        `
    },
    {
        title: "第5课：面向对象编程",
        content: `
            <h4>类与对象</h4>
            <pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"你好，我是{self.name}，今年{self.age}岁。"

# 创建对象
p1 = Person("张三", 25)
print(p1.greet())</code></pre>
            
            <h4>继承</h4>
            <pre><code>class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def study(self):
        return f"{self.name}正在学习。"

# 创建学生对象
s1 = Student("李四", 20, "2026001")
print(s1.greet())
print(s1.study())</code></pre>
            
            <h4>封装</h4>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # 私有属性
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance</code></pre>
            
            <h4>多态</h4>
            <pre><code>class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "汪汪！"

class Cat(Animal):
    def speak(self):
        return "喵喵！"

def make_animal_speak(animal):
    print(animal.speak())

# 多态调用
dog = Dog()
cat = Cat()
make_animal_speak(dog)  # 汪汪！
make_animal_speak(cat)  # 喵喵！</code></pre>
        `
    },
    {
        title: "第6课：文件操作与异常处理",
        content: `
            <h4>文件操作</h4>
            <h5>读取文件</h5>
            <pre><code># 读取整个文件
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 逐行读取
with open("example.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())</code></pre>
            
            <h5>写入文件</h5>
            <pre><code># 写入文件（覆盖）
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\n")
    f.write("This is a test.\n")

# 追加内容
with open("example.txt", "a", encoding="utf-8") as f:
    f.write("This is appended.\n")</code></pre>
            
            <h4>异常处理</h4>
            <pre><code>try:
    # 可能会引发异常的代码
    num = int(input("请输入一个数字："))
    result = 10 / num
    print(f"结果：{result}")
except ValueError:
    print("请输入有效的数字！")
except ZeroDivisionError:
    print("除数不能为零！")
except Exception as e:
    print(f"发生错误：{e}")
finally:
    print("程序执行完毕。")</code></pre>
            
            <h4>自定义异常</h4>
            <pre><code>class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

try:
    raise CustomError("这是一个自定义异常")
except CustomError as e:
    print(f"捕获到自定义异常：{e}")</code></pre>
        `
    }
];

let currentLessonIndex = -1;

// 从 URL 参数加载课程
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
