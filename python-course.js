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
            <div class="lesson-intro">
                <h3>Python 基础语法入门</h3>
                <p>在这一课中，我们将学习 Python 的基础语法，包括变量、数据类型、运算符、条件语句和循环语句。这些是 Python 编程的基础，掌握它们将帮助你写出更复杂的程序。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20code%20syntax%20highlighting%2C%20colorful%20code%20editor%20interface%2C%20beginner%20friendly%2C%20simple%20background&image_size=square" alt="Python Syntax" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>变量与数据类型</h4>
            <p>变量是用来存储数据的容器，在 Python 中，你不需要声明变量的类型，Python 会自动根据你赋值的内容确定类型。</p>

            <h5>变量的命名规则</h5>
            <ul>
                <li>变量名只能包含字母、数字和下划线</li>
                <li>变量名不能以数字开头</li>
                <li>变量名区分大小写</li>
                <li>变量名不能是 Python 关键字（如 if、for、while 等）</li>
            </ul>

            <h5>创建变量</h5>
            <pre><code># 创建变量并赋值
name = "李艺"
age = 18
height = 1.75
is_student = True

# 打印变量
print(name)
print(age)
print(height)
print(is_student)</code></pre>

            <h5>常见数据类型</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔢</div>
                    <h5>整数 (int)</h5>
                    <p>如 1, 100, -5</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📐</div>
                    <h5>浮点数 (float)</h5>
                    <p>如 3.14, 2.0, -0.5</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h5>字符串 (str)</h5>
                    <p>如 "Hello", 'Python'</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">✓</div>
                    <h5>布尔值 (bool)</h5>
                    <p>True 或 False</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🈳</div>
                    <h5>空值 (None)</h5>
                    <p>表示没有值</p>
                </div>
            </div>

            <h5>字符串操作</h5>
            <pre><code># 字符串连接
first_name = "张"
last_name = "三"
full_name = first_name + last_name
print(full_name)  # 张三

# 字符串格式化
name = "李艺"
age = 18
print(f"你好，我叫{name}，今年{age}岁。")

# 字符串长度
text = "Hello, Python!"
print(len(text))  # 13

# 字符串切片
print(text[0:5])  # Hello
print(text[-6:])  # Python</code></pre>

            <h4>运算符</h4>
            <p>运算符用于执行各种操作，Python 提供了多种类型的运算符：</p>

            <h5>算术运算符</h5>
            <table class="operator-table">
                <tr>
                    <th>运算符</th>
                    <th>描述</th>
                    <th>示例</th>
                    <th>结果</th>
                </tr>
                <tr>
                    <td>+</td>
                    <td>加法</td>
                    <td>3 + 5</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>减法</td>
                    <td>10 - 4</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>乘法</td>
                    <td>2 * 6</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>/</td>
                    <td>除法</td>
                    <td>8 / 2</td>
                    <td>4.0</td>
                </tr>
                <tr>
                    <td>%</td>
                    <td>取余数</td>
                    <td>7 % 3</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>**</td>
                    <td>幂运算</td>
                    <td>2 ** 3</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>//</td>
                    <td>整除</td>
                    <td>7 // 3</td>
                    <td>2</td>
                </tr>
            </table>

            <h5>比较运算符</h5>
            <table class="operator-table">
                <tr>
                    <th>运算符</th>
                    <th>描述</th>
                    <th>示例</th>
                </tr>
                <tr>
                    <td>==</td>
                    <td>等于</td>
                    <td>5 == 5 → True</td>
                </tr>
                <tr>
                    <td>!=</td>
                    <td>不等于</td>
                    <td>5 != 3 → True</td>
                </tr>
                <tr>
                    <td>&gt;</td>
                    <td>大于</td>
                    <td>5 &gt; 3 → True</td>
                </tr>
                <tr>
                    <td>&lt;</td>
                    <td>小于</td>
                    <td>3 &lt; 5 → True</td>
                </tr>
                <tr>
                    <td>&gt;=</td>
                    <td>大于等于</td>
                    <td>5 &gt;= 5 → True</td>
                </tr>
                <tr>
                    <td>&lt;=</td>
                    <td>小于等于</td>
                    <td>3 &lt;= 5 → True</td>
                </tr>
            </table>

            <h5>逻辑运算符</h5>
            <table class="operator-table">
                <tr>
                    <th>运算符</th>
                    <th>描述</th>
                    <th>示例</th>
                </tr>
                <tr>
                    <td>and</td>
                    <td>与 - 两个条件都为真才为真</td>
                    <td>(5 &gt; 3) and (2 &lt; 4) → True</td>
                </tr>
                <tr>
                    <td>or</td>
                    <td>或 - 至少一个条件为真就为真</td>
                    <td>(5 &gt; 3) or (2 &gt; 4) → True</td>
                </tr>
                <tr>
                    <td>not</td>
                    <td>非 - 取反</td>
                    <td>not (5 &gt; 3) → False</td>
                </tr>
            </table>

            <h4>条件语句</h4>
            <p>条件语句用于根据不同的条件执行不同的代码块。</p>

            <h5>if 语句</h5>
            <pre><code>age = 18

if age >= 18:
    print("你是成年人")
else:
    print("你是未成年人")</code></pre>

            <h5>if-elif-else 语句</h5>
            <pre><code>score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")</code></pre>

            <h5>嵌套 if 语句</h5>
            <pre><code>age = 18
has_id = True

if age >= 18:
    if has_id:
        print("可以进入网吧")
    else:
        print("需要出示身份证")
else:
    print("未满18岁，不能进入网吧")</code></pre>

            <h4>循环语句</h4>
            <p>循环语句用于重复执行一段代码。</p>

            <h5>for 循环</h5>
            <pre><code># 遍历数字
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# 遍历字符串
for char in "Python":
    print(char)  # P, y, t, h, o, n

# 遍历列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(fruit)</code></pre>

            <h5>while 循环</h5>
            <pre><code># 基本 while 循环
count = 0
while count < 5:
    print(count)
    count += 1  # 不要忘记增加计数器，否则会无限循环

# 带条件的 while 循环
password = ""
while password != "123456":
    password = input("请输入密码：")
print("密码正确！")</code></pre>

            <h5>循环控制语句</h5>
            <pre><code># break - 跳出循环
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - 跳过当前循环，继续下一次循环
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # 1, 3, 5, 7, 9</code></pre>

            <div class="info-box">
                <h5>💡 小提示</h5>
                <p>在 Python 中，缩进非常重要！它决定了代码块的范围。通常使用 4 个空格作为缩进。</p>
            </div>

            <h4>综合练习</h4>
            <p>让我们来做一个简单的猜数字游戏：</p>
            <pre><code>import random

# 生成一个 1-100 之间的随机数
secret_number = random.randint(1, 100)
guess = 0
tries = 0

print("猜数字游戏！")
print("我想了一个 1-100 之间的数字，你能猜到吗？")

while guess != secret_number:
    guess = int(input("请输入你的猜测："))
    tries += 1
    
    if guess < secret_number:
        print("太小了！")
    elif guess > secret_number:
        print("太大了！")
    else:
        print(f"恭喜你猜对了！你用了 {tries} 次尝试。")</code></pre>

            <h4>小结</h4>
            <ul>
                <li>变量是存储数据的容器，Python 会自动确定变量类型</li>
                <li>Python 有多种数据类型：整数、浮点数、字符串、布尔值和空值</li>
                <li>运算符用于执行各种操作，包括算术、比较和逻辑运算</li>
                <li>条件语句用于根据不同的条件执行不同的代码</li>
                <li>循环语句用于重复执行代码块</li>
                <li>缩进在 Python 中非常重要，它决定了代码块的范围</li>
            </ul>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>现在你已经掌握了 Python 的基础语法，下一课我们将学习 Python 的数据结构，包括列表、元组、字典和集合。</p>
            </div>
        `
    },
    {
        title: "第3课：数据结构",
        content: `
            <div class="lesson-intro">
                <h3>Python 数据结构入门</h3>
                <p>在这一课中，我们将学习 Python 中常用的数据结构，包括列表、元组、字典和集合。这些数据结构可以帮助你更有效地组织和管理数据。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20structures%20visualization%2C%20colorful%20diagrams%20of%20lists%2C%20tuples%2C%20dictionaries%20and%20sets%2C%20beginner%20friendly%2C%20simple%20background&image_size=square" alt="Data Structures" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>列表 (List)</h4>
            <p>列表是 Python 中最常用的数据结构，用于存储多个元素。列表是可变的，这意味着你可以修改、添加或删除元素。</p>

            <h5>创建列表</h5>
            <pre><code># 创建空列表
empty_list = []

# 创建带有元素的列表
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Python", 3.14, True, 42]

print(fruits)
print(numbers)
print(mixed)</code></pre>

            <h5>访问列表元素</h5>
            <pre><code>fruits = ["苹果", "香蕉", "橙子", "葡萄"]

# 通过索引访问元素（索引从 0 开始）
print(fruits[0])  # 苹果
print(fruits[2])  # 橙子

# 负索引（从列表末尾开始计数）
print(fruits[-1])  # 葡萄
print(fruits[-2])  # 橙子

# 切片操作
print(fruits[1:3])  # ["香蕉", "橙子"]
print(fruits[:2])   # ["苹果", "香蕉"]
print(fruits[2:])   # ["橙子", "葡萄"]</code></pre>

            <h5>修改列表元素</h5>
            <pre><code>fruits = ["苹果", "香蕉", "橙子"]

# 修改元素
fruits[1] = "梨"
print(fruits)  # ["苹果", "梨", "橙子"]

# 修改多个元素（切片赋值）
fruits[0:2] = ["草莓", "蓝莓"]
print(fruits)  # ["草莓", "蓝莓", "橙子"]</code></pre>

            <h5>列表方法</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">➕</div>
                    <h5>append()</h5>
                    <p>在列表末尾添加元素</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">➡️</div>
                    <h5>extend()</h5>
                    <p>添加另一个列表的所有元素</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔄</div>
                    <h5>insert()</h5>
                    <p>在指定位置插入元素</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">❌</div>
                    <h5>remove()</h5>
                    <p>移除指定值的元素</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📏</div>
                    <h5>len()</h5>
                    <p>获取列表长度</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h5>in 运算符</h5>
                    <p>检查元素是否在列表中</p>
                </div>
            </div>

            <h5>列表方法示例</h5>
            <pre><code>fruits = ["苹果", "香蕉", "橙子"]

# append() - 添加元素到末尾
fruits.append("葡萄")
print(fruits)  # ["苹果", "香蕉", "橙子", "葡萄"]

# extend() - 添加另一个列表
more_fruits = ["草莓", "蓝莓"]
fruits.extend(more_fruits)
print(fruits)  # ["苹果", "香蕉", "橙子", "葡萄", "草莓", "蓝莓"]

# insert() - 在指定位置插入
fruits.insert(1, "梨")
print(fruits)  # ["苹果", "梨", "香蕉", "橙子", "葡萄", "草莓", "蓝莓"]

# remove() - 移除指定元素
fruits.remove("香蕉")
print(fruits)  # ["苹果", "梨", "橙子", "葡萄", "草莓", "蓝莓"]

# len() - 获取长度
print(len(fruits))  # 6

# in 运算符 - 检查元素是否存在
print("苹果" in fruits)  # True
print("香蕉" in fruits)  # False</code></pre>

            <h4>元组 (Tuple)</h4>
            <p>元组是不可变的序列，一旦创建就不能修改。元组使用圆括号表示。</p>

            <h5>创建元组</h5>
            <pre><code># 创建元组
point = (10, 20)
colors = ("红", "绿", "蓝")
single = ("唯一元素",)  # 注意单个元素后面的逗号

# 不使用括号创建元组
numbers = 1, 2, 3, 4, 5

print(point)
print(colors)
print(single)
print(numbers)</code></pre>

            <h5>访问元组元素</h5>
            <pre><code>point = (10, 20, 30)

# 通过索引访问
print(point[0])  # 10
print(point[2])  # 30

# 负索引
print(point[-1])  # 30

# 切片操作
print(point[1:3])  # (20, 30)</code></pre>

            <h5>元组的不可变性</h5>
            <div class="info-box">
                <h5>💡 小提示</h5>
                <p>元组是不可变的，这意味着你不能修改、添加或删除元组中的元素。如果你尝试这样做，会得到一个错误。</p>
            </div>

            <pre><code>point = (10, 20)

# 尝试修改元组（会出错）
# point[0] = 50  # 这会引发 TypeError

# 但是你可以创建一个新的元组
new_point = (50, point[1])
print(new_point)  # (50, 20)</code></pre>

            <h4>字典 (Dictionary)</h4>
            <p>字典用于存储键值对，每个键映射到一个值。字典使用花括号表示，键和值之间用冒号分隔。</p>

            <h5>创建字典</h5>
            <pre><code># 创建空字典
empty_dict = {}

# 创建带有键值对的字典
person = {
    "name": "李艺",
    "age": 18,
    "city": "广州",
    "is_student": True
}

print(person)</code></pre>

            <h5>访问字典值</h5>
            <pre><code>person = {"name": "李艺", "age": 18, "city": "广州"}

# 通过键访问值
print(person["name"])  # 李艺
print(person["age"])   # 18

# 使用 get() 方法（更安全）
print(person.get("city"))      # 广州
print(person.get("job"))       # None
print(person.get("job", "未知"))  # 未知</code></pre>

            <h5>修改字典</h5>
            <pre><code>person = {"name": "李艺", "age": 18, "city": "广州"}

# 添加新键值对
person["job"] = "学生"
print(person)  # {"name": "李艺", "age": 18, "city": "广州", "job": "学生"}

# 修改现有值
person["age"] = 19
print(person)  # {"name": "李艺", "age": 19, "city": "广州", "job": "学生"}

# 删除键值对
del person["city"]
print(person)  # {"name": "李艺", "age": 19, "job": "学生"}</code></pre>

            <h5>字典方法</h5>
            <pre><code>person = {"name": "李艺", "age": 18, "city": "广州"}

# keys() - 获取所有键
print(person.keys())  # dict_keys(["name", "age", "city"])

# values() - 获取所有值
print(person.values())  # dict_values(["李艺", 18, "广州"])

# items() - 获取所有键值对
print(person.items())  # dict_items([("name", "李艺"), ("age", 18), ("city", "广州")])

# 遍历字典
for key, value in person.items():
    print(f"{key}: {value}")</code></pre>

            <h4>集合 (Set)</h4>
            <p>集合用于存储唯一元素，不允许重复。集合使用花括号表示。</p>

            <h5>创建集合</h5>
            <pre><code># 创建空集合
empty_set = set()

# 创建带有元素的集合
numbers = {1, 2, 3, 4, 5}

# 从列表创建集合（自动去重）
fruits = set(["苹果", "香蕉", "苹果", "橙子"])
print(fruits)  # {"苹果", "香蕉", "橙子"}</code></pre>

            <h5>集合操作</h5>
            <pre><code>numbers = {1, 2, 3, 4, 5}

# 添加元素
numbers.add(6)
print(numbers)  # {1, 2, 3, 4, 5, 6}

# 移除元素
numbers.remove(3)
print(numbers)  # {1, 2, 4, 5, 6}

# 检查元素是否存在
print(2 in numbers)  # True
print(3 in numbers)  # False

# 集合运算
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

# 并集
print(a | b)  # {1, 2, 3, 4, 5, 6}

# 交集
print(a & b)  # {3, 4}

# 差集
print(a - b)  # {1, 2}
print(b - a)  # {5, 6}</code></pre>

            <h4>数据结构比较</h4>
            <table class="operator-table">
                <tr>
                    <th>数据结构</th>
                    <th>表示方式</th>
                    <th>是否可变</th>
                    <th>特点</th>
                </tr>
                <tr>
                    <td>列表 (List)</td>
                    <td>[ ]</td>
                    <td>是</td>
                    <td>存储有序元素，允许重复</td>
                </tr>
                <tr>
                    <td>元组 (Tuple)</td>
                    <td>( )</td>
                    <td>否</td>
                    <td>存储有序元素，允许重复</td>
                </tr>
                <tr>
                    <td>字典 (Dictionary)</td>
                    <td>{ }</td>
                    <td>是</td>
                    <td>存储键值对，键唯一</td>
                </tr>
                <tr>
                    <td>集合 (Set)</td>
                    <td>{ }</td>
                    <td>是</td>
                    <td>存储唯一元素，无序</td>
                </tr>
            </table>

            <h4>综合练习</h4>
            <p>让我们创建一个学生管理系统的简单示例：</p>
            <pre><code># 学生管理系统
students = []

# 添加学生
def add_student():
    name = input("请输入学生姓名：")
    age = int(input("请输入学生年龄："))
    grade = input("请输入学生年级：")
    
    student = {
        "name": name,
        "age": age,
        "grade": grade
    }
    
    students.append(student)
    print(f"已添加学生：{name}")

# 显示所有学生
def show_students():
    if not students:
        print("没有学生记录")
        return
    
    print("\n学生列表：")
    for i, student in enumerate(students, 1):
        print(f"{i}. 姓名：{student['name']}, 年龄：{student['age']}, 年级：{student['grade']}")

# 主程序
while True:
    print("\n学生管理系统")
    print("1. 添加学生")
    print("2. 显示所有学生")
    print("3. 退出")
    
    choice = input("请选择操作：")
    
    if choice == "1":
        add_student()
    elif choice == "2":
        show_students()
    elif choice == "3":
        print("再见！")
        break
    else:
        print("无效选择，请重新输入")</code></pre>

            <h4>小结</h4>
            <ul>
                <li>列表是可变的有序集合，用于存储多个元素</li>
                <li>元组是不可变的有序集合，用于存储不需要修改的数据</li>
                <li>字典是可变的键值对集合，用于存储关联数据</li>
                <li>集合是可变的唯一元素集合，用于存储不重复的数据</li>
                <li>每种数据结构都有其特定的用途和优势</li>
            </ul>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>现在你已经掌握了 Python 的基本数据结构，下一课我们将学习函数与模块，这将帮助你组织和重用代码。</p>
            </div>
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
