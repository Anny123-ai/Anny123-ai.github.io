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

            <h4>单元测试</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>Python 的设计哲学强调什么？
                        <ul>
                            <li>A. 代码的可读性</li>
                            <li>B. 执行速度</li>
                            <li>C. 内存占用</li>
                            <li>D. 语法复杂性</li>
                        </ul>
                    </li>
                    <li>Python 的名字来源于什么？
                        <ul>
                            <li>A. 蛇</li>
                            <li>B. 英国喜剧团体 Monty Python</li>
                            <li>C. 数学家 Python</li>
                            <li>D. 希腊神话</li>
                        </ul>
                    </li>
                    <li>以下哪个不是 Python 的特点？
                        <ul>
                            <li>A. 简单易学</li>
                            <li>B. 免费开源</li>
                            <li>C. 编译型语言</li>
                            <li>D. 跨平台</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>Python 2.x 仍然被推荐使用。（ ）</li>
                    <li>安装 Python 时，勾选 "Add Python to PATH" 选项可以方便在命令行中直接使用 Python。（ ）</li>
                </ol>

                <h5>三、简答题</h5>
                <ol>
                    <li>Python 能做什么？请列举至少三个应用领域。</li>
                    <li>如何验证 Python 是否安装成功？</li>
                </ol>
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

            <h4>单元测试</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个是 Python 的正确变量名？
                        <ul>
                            <li>A. 123abc</li>
                            <li>B. abc_123</li>
                            <li>C. for</li>
                            <li>D. my-variable</li>
                        </ul>
                    </li>
                    <li>Python 中，以下哪个不是基本数据类型？
                        <ul>
                            <li>A. int</li>
                            <li>B. float</li>
                            <li>C. string</li>
                            <li>D. array</li>
                        </ul>
                    </li>
                    <li>以下哪个运算符用于取余数？
                        <ul>
                            <li>A. /</li>
                            <li>B. //</li>
                            <li>C. %</li>
                            <li>D. **</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>Python 是一种强类型语言，变量在声明时必须指定类型。（ ）</li>
                    <li>在 Python 中，缩进是语法的一部分，用于表示代码块的范围。（ ）</li>
                </ol>

                <h5>三、简答题</h5>
                <ol>
                    <li>请简述 Python 中的字符串格式化方法。</li>
                    <li>请写出一个使用 if-elif-else 语句的例子。</li>
                </ol>
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

            <h4>单元测试</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个数据结构是不可变的？
                        <ul>
                            <li>A. 列表</li>
                            <li>B. 元组</li>
                            <li>C. 字典</li>
                            <li>D. 集合</li>
                        </ul>
                    </li>
                    <li>以下哪个方法用于在列表末尾添加元素？
                        <ul>
                            <li>A. insert()</li>
                            <li>B. append()</li>
                            <li>C. extend()</li>
                            <li>D. add()</li>
                        </ul>
                    </li>
                    <li>字典中的键必须是：
                        <ul>
                            <li>A. 可变的</li>
                            <li>B. 不可变的</li>
                            <li>C. 整数</li>
                            <li>D. 字符串</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>集合中的元素是唯一的，不允许重复。（ ）</li>
                    <li>列表和元组都可以使用索引访问元素。（ ）</li>
                </ol>

                <h5>三、简答题</h5>
                <ol>
                    <li>请简述列表、元组、字典和集合的区别。</li>
                    <li>如何从列表中删除一个元素？请写出至少两种方法。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第4课：函数与模块",
        content: `
            <div class="lesson-intro">
                <h3>Python 函数与模块</h3>
                <p>在这一课中，我们将学习 Python 中的函数和模块。函数可以帮助你组织代码，模块则可以帮助你重用代码，让你的程序更加模块化和易于维护。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20functions%20and%20modules%20visualization%2C%20colorful%20code%20blocks%2C%20function%20diagrams%2C%20beginner%20friendly%2C%20simple%20background&image_size=square" alt="Functions and Modules" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>函数定义与调用</h4>
            <p>函数是一段可重用的代码块，用于执行特定的任务。通过函数，你可以将复杂的问题分解成更小、更易管理的部分。</p>

            <h5>定义函数</h5>
            <pre><code>def greet(name):
    """
    向用户打招呼的函数
    
    参数:
        name: 字符串，用户的名字
    
    返回:
        打招呼的字符串
    """
    return f"你好，{name}！"

# 调用函数
print(greet("李艺"))  # 你好，李艺！</code></pre>

            <h5>函数的组成部分</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h5>def 关键字</h5>
                    <p>用于定义函数</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔤</div>
                    <h5>函数名</h5>
                    <p>函数的名称，遵循变量命名规则</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📦</div>
                    <h5>参数</h5>
                    <p>函数接收的输入值</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📄</div>
                    <h5>文档字符串</h5>
                    <p>描述函数功能的注释</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚙️</div>
                    <h5>函数体</h5>
                    <p>函数执行的代码</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">↩️</div>
                    <h5>return 语句</h5>
                    <p>返回函数的结果</p>
                </div>
            </div>

            <h4>函数参数</h4>
            <p>Python 函数支持多种类型的参数，让函数更加灵活。</p>

            <h5>位置参数</h5>
            <pre><code>def add(a, b):
    return a + b

print(add(3, 5))  # 8</code></pre>

            <h5>默认参数</h5>
            <pre><code>def power(x, n=2):
    """计算 x 的 n 次方"""
    return x ** n

print(power(2))    # 4（使用默认参数 n=2）
print(power(2, 3)) # 8（使用指定参数 n=3）</code></pre>

            <h5>关键字参数</h5>
            <pre><code>def describe_person(name, age, city):
    return f"姓名：{name}，年龄：{age}，城市：{city}"

# 使用关键字参数
print(describe_person(name="李艺", age=18, city="广州"))

# 可以改变参数顺序
print(describe_person(city="北京", name="张三", age=20))</code></pre>

            <h5>可变参数</h5>
            <pre><code>def sum_numbers(*args):
    """计算任意数量数字的和"""
    return sum(args)

print(sum_numbers(1, 2, 3))      # 6
print(sum_numbers(10, 20, 30, 40))  # 100</code></pre>

            <h5>关键字可变参数</h5>
            <pre><code>def print_info(**kwargs):
    """打印任意关键字参数"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="李艺", age=18, city="广州")
# 输出：
# name: 李艺
# age: 18
# city: 广州</code></pre>

            <h5>混合使用参数</h5>
            <pre><code>def mixed_params(a, b, *args, c=10, **kwargs):
    print(f"a: {a}, b: {b}, c: {c}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

mixed_params(1, 2, 3, 4, 5, c=20, name="李艺", age=18)
# 输出：
# a: 1, b: 2, c: 20
# args: (3, 4, 5)
# kwargs: {'name': '李艺', 'age': 18}</code></pre>

            <div class="info-box">
                <h5>💡 小提示</h5>
                <p>参数的顺序很重要！正确的顺序是：位置参数 → 可变参数 → 默认参数 → 关键字可变参数</p>
            </div>

            <h4>函数的返回值</h4>
            <pre><code># 返回单个值
def square(x):
    return x * x

print(square(5))  # 25

# 返回多个值
def get_coordinates():
    return 10, 20, 30

x, y, z = get_coordinates()
print(f"x: {x}, y: {y}, z: {z}")  # x: 10, y: 20, z: 30

# 无返回值的函数
def say_hello(name):
    print(f"你好，{name}！")

result = say_hello("李艺")
print(result)  # None</code></pre>

            <h4>模块</h4>
            <p>模块是一个包含 Python 定义和语句的文件。通过模块，你可以将代码组织成可重用的单元。</p>

            <h5>内置模块</h5>
            <pre><code># 导入整个模块
import math

# 使用模块中的函数
print(math.sqrt(16))  # 4.0
print(math.pi)       # 3.141592653589793

# 导入特定函数
from math import pi, sin
print(pi)    # 3.141592653589793
print(sin(pi/2))  # 1.0

# 导入所有函数（不推荐）
from math import *
print(cos(0))  # 1.0</code></pre>

            <h5>常用内置模块</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔢</div>
                    <h5>math</h5>
                    <p>数学函数</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📅</div>
                    <h5>datetime</h5>
                    <p>日期和时间</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎲</div>
                    <h5>random</h5>
                    <p>随机数生成</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📁</div>
                    <h5>os</h5>
                    <p>操作系统接口</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h5>urllib</h5>
                    <p>网络请求</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>json</h5>
                    <p>JSON 处理</p>
                </div>
            </div>

            <h5>创建自己的模块</h5>
            <p>创建一个名为 <code>mymodule.py</code> 的文件，内容如下：</p>
            <pre><code># mymodule.py
"""我的第一个模块"""

def say_hello(name):
    """向用户打招呼"""
    return f"你好，{name}！"

def calculate_area(radius):
    """计算圆的面积"""
    import math
    return math.pi * radius ** 2

# 模块级变量
VERSION = "1.0.0"
AUTHOR = "李艺"
</code></pre>

            <p>然后在另一个文件中导入并使用它：</p>
            <pre><code># main.py
import mymodule

print(mymodule.say_hello("张三"))
print(mymodule.calculate_area(5))
print(f"模块版本：{mymodule.VERSION}")
print(f"作者：{mymodule.AUTHOR}")</code></pre>

            <h5>模块的搜索路径</h5>
            <pre><code>import sys
print(sys.path)</code></pre>

            <h4>包</h4>
            <p>包是一个包含多个模块的目录，用于组织相关的模块。</p>

            <h5>创建包</h5>
            <ol>
                <li>创建一个目录，例如 <code>mypackage</code></li>
                <li>在目录中创建一个 <code>__init__.py</code> 文件</li>
                <li>在目录中创建多个模块文件</li>
            </ol>

            <pre><code># mypackage/__init__.py
"""我的包"""

# mypackage/calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# mypackage/greeter.py
def greet(name):
    return f"你好，{name}！"
</code></pre>

            <h5>使用包</h5>
            <pre><code># 导入整个包
import mypackage

# 导入包中的模块
import mypackage.calculator
print(mypackage.calculator.add(3, 5))

# 从包中导入特定模块
from mypackage import greeter
print(greeter.greet("李艺"))

# 从包的模块中导入特定函数
from mypackage.calculator import subtract
print(subtract(10, 3))</code></pre>

            <h4>综合练习</h4>
            <p>让我们创建一个简单的计算器模块：</p>
            <pre><code># calculator.py
"""简单计算器模块"""

def add(*args):
    """计算多个数的和"""
    return sum(args)

def subtract(a, b):
    """计算两个数的差"""
    return a - b

def multiply(*args):
    """计算多个数的乘积"""
    result = 1
    for num in args:
        result *= num
    return result

def divide(a, b):
    """计算两个数的商"""
    if b == 0:
        return "错误：除数不能为零"
    return a / b

# 使用示例
if __name__ == "__main__":
    print("计算器模块测试")
    print(f"3 + 5 = {add(3, 5)}")
    print(f"10 - 4 = {subtract(10, 4)}")
    print(f"2 * 3 * 4 = {multiply(2, 3, 4)}")
    print(f"10 / 2 = {divide(10, 2)}")
    print(f"10 / 0 = {divide(10, 0)}")
</code></pre>

            <h4>小结</h4>
            <ul>
                <li>函数是可重用的代码块，用于执行特定任务</li>
                <li>函数可以接收不同类型的参数：位置参数、默认参数、关键字参数、可变参数</li>
                <li>函数可以返回单个值或多个值</li>
                <li>模块是包含 Python 代码的文件，用于组织和重用代码</li>
                <li>包是包含多个模块的目录，用于组织相关的模块</li>
                <li>通过导入模块和包，你可以使用其中定义的函数和变量</li>
            </ul>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>现在你已经掌握了 Python 的函数与模块，下一课我们将学习面向对象编程，这是一种更高级的编程范式。</p>
            </div>

            <h4>单元测试</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个关键字用于定义函数？
                        <ul>
                            <li>A. function</li>
                            <li>B. def</li>
                            <li>C. define</li>
                            <li>D. func</li>
                        </ul>
                    </li>
                    <li>以下哪种参数类型可以接收任意数量的位置参数？
                        <ul>
                            <li>A. 默认参数</li>
                            <li>B. 关键字参数</li>
                            <li>C. 可变参数 (*args)</li>
                            <li>D. 关键字可变参数 (**kwargs)</li>
                        </ul>
                    </li>
                    <li>如何导入模块中的特定函数？
                        <ul>
                            <li>A. import module</li>
                            <li>B. from module import function</li>
                            <li>C. include module</li>
                            <li>D. require module</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>函数可以返回多个值。（ ）</li>
                    <li>Python 中的模块是一个包含 Python 定义和语句的文件。（ ）</li>
                </ol>

                <h5>三、简答题</h5>
                <ol>
                    <li>请简述 Python 函数参数的类型。</li>
                    <li>如何创建和使用自己的模块？</li>
                </ol>
            </div>
        `
    },
    {
        title: "第5课：面向对象编程",
        content: `
            <div class="lesson-intro">
                <h3>Python 面向对象编程</h3>
                <p>在这一课中，我们将学习 Python 的面向对象编程（OOP）。面向对象编程是一种编程范式，它将数据和操作数据的方法组织成对象，使代码更加模块化、可重用和易于维护。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20object%20oriented%20programming%20visualization%2C%20class%20diagrams%2C%20objects%2C%20inheritance%20hierarchy%2C%20beginner%20friendly%2C%20simple%20background&image_size=square" alt="Object Oriented Programming" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>类与对象</h4>
            <p>在面向对象编程中，<strong>类</strong>是一个模板，定义了对象的属性和方法；而<strong>对象</strong>是类的实例。</p>

            <h5>定义类</h5>
            <pre><code>class Person:
    """人员类"""
    
    def __init__(self, name, age):
        """初始化方法"""
        self.name = name  # 实例属性
        self.age = age    # 实例属性
    
    def greet(self):
        """打招呼方法"""
        return f"你好，我是{self.name}，今年{self.age}岁。"

# 创建对象
person1 = Person("李艺", 18)
person2 = Person("张三", 25)

# 访问属性
print(person1.name)  # 李艺
print(person2.age)   # 25

# 调用方法
print(person1.greet())  # 你好，我是李艺，今年18岁。
print(person2.greet())  # 你好，我是张三，今年25岁。</code></pre>

            <h5>类的组成部分</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h5>class 关键字</h5>
                    <p>用于定义类</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔤</div>
                    <h5>类名</h5>
                    <p>类的名称，通常使用驼峰命名法</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📄</div>
                    <h5>文档字符串</h5>
                    <p>描述类的功能</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚙️</div>
                    <h5>__init__ 方法</h5>
                    <p>初始化方法，创建对象时调用</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📦</div>
                    <h5>属性</h5>
                    <p>存储对象的数据</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔧</div>
                    <h5>方法</h5>
                    <p>对象的行为和功能</p>
                </div>
            </div>

            <h4>继承</h4>
            <p>继承是面向对象编程的重要特性，它允许创建一个新类（子类）来继承现有类（父类）的属性和方法。</p>

            <h5>基本继承</h5>
            <pre><code>class Person:
    """人员类"""
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"你好，我是{self.name}，今年{self.age}岁。"

class Student(Person):
    """学生类（继承自 Person）"""
    
    def __init__(self, name, age, student_id):
        # 调用父类的初始化方法
        super().__init__(name, age)
        # 添加子类特有的属性
        self.student_id = student_id
    
    def study(self):
        """学习方法"""
        return f"{self.name}正在学习。"

# 创建学生对象
student = Student("李艺", 18, "2026001")

# 调用继承的方法
print(student.greet())  # 你好，我是李艺，今年18岁。

# 调用子类特有的方法
print(student.study())  # 李艺正在学习。

# 访问所有属性
print(f"姓名：{student.name}，年龄：{student.age}，学号：{student.student_id}")</code></pre>

            <h5>多级继承</h5>
            <pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

class CollegeStudent(Student):
    def __init__(self, name, age, student_id, major):
        super().__init__(name, age, student_id)
        self.major = major
    
    def study_major(self):
        return f"{self.name}正在学习{self.major}专业。"

# 创建大学生对象
college_student = CollegeStudent("李艺", 18, "2026001", "商务数据分析")
print(college_student.greet())  # 继承自 Person
print(college_student.study())  # 继承自 Student
print(college_student.study_major())  # 特有的方法</code></pre>

            <h4>封装</h4>
            <p>封装是指将对象的内部状态隐藏起来，只通过公共方法来访问和修改。在 Python 中，我们使用下划线来表示私有属性和方法。</p>

            <h5>私有属性</h5>
            <pre><code>class BankAccount:
    """银行账户类"""
    
    def __init__(self, balance):
        self.__balance = balance  # 私有属性（双下划线开头）
    
    def deposit(self, amount):
        """存款方法"""
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        """取款方法"""
        if amount > 0 and amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
    
    def get_balance(self):
        """获取余额方法"""
        return self.__balance

# 创建账户对象
account = BankAccount(1000)

# 尝试直接访问私有属性（会出错）
# print(account.__balance)  # 这会引发 AttributeError

# 通过公共方法访问
print(account.get_balance())  # 1000

# 存款
account.deposit(500)
print(account.get_balance())  # 1500

# 取款
account.withdraw(300)
print(account.get_balance())  # 1200</code></pre>

            <div class="info-box">
                <h5>💡 小提示</h5>
                <p>在 Python 中，双下划线开头的属性会被名称修饰（name mangling），实际上会变成 <code>_ClassName__attribute</code> 的形式。但这不是真正的私有，只是一种约定。</p>
            </div>

            <h4>多态</h4>
            <p>多态是指不同类的对象可以响应相同的方法调用，但根据对象的实际类型执行不同的行为。</p>

            <h5>多态示例</h5>
            <pre><code>class Animal:
    """动物基类"""
    def speak(self):
        """发出声音"""
        pass

class Dog(Animal):
    """狗类"""
    def speak(self):
        return "汪汪！"

class Cat(Animal):
    """猫类"""
    def speak(self):
        return "喵喵！"

class Bird(Animal):
    """鸟类"""
    def speak(self):
        return "啾啾！"

# 多态函数
def make_animal_speak(animal):
    """让动物发出声音"""
    print(animal.speak())

# 创建不同的动物对象
dog = Dog()
cat = Cat()
bird = Bird()

# 调用相同的方法，得到不同的结果
make_animal_speak(dog)   # 汪汪！
make_animal_speak(cat)   # 喵喵！
make_animal_speak(bird)  # 啾啾！</code></pre>

            <h4>类属性和类方法</h4>
            <p>除了实例属性和实例方法，Python 还支持类属性和类方法。</p>

            <h5>类属性</h5>
            <pre><code>class Person:
    """人员类"""
    # 类属性（所有实例共享）
    species = "人类"
    count = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        # 每次创建实例时，类属性 count 加 1
        Person.count += 1

# 访问类属性
print(Person.species)  # 人类
print(Person.count)    # 0

# 创建实例
person1 = Person("李艺", 18)
print(Person.count)    # 1

person2 = Person("张三", 25)
print(Person.count)    # 2

# 类属性可以通过实例访问
print(person1.species)  # 人类
</code></pre>

            <h5>类方法和静态方法</h5>
            <pre><code>class Math:
    """数学工具类"""
    
    # 类属性
    PI = 3.141592653589793
    
    @classmethod
    def circle_area(cls, radius):
        """计算圆的面积（类方法）"""
        return cls.PI * radius ** 2
    
    @staticmethod
    def add(a, b):
        """加法运算（静态方法）"""
        return a + b

# 调用类方法
print(Math.circle_area(5))  # 78.53981633974483

# 调用静态方法
print(Math.add(3, 5))  # 8
</code></pre>

            <h4>特殊方法</h4>
            <p>Python 中有许多特殊方法，它们以双下划线开头和结尾，用于实现对象的特殊行为。</p>

            <h5>常用特殊方法</h5>
            <pre><code>class Point:
    """点类"""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        """字符串表示"""
        return f"Point({self.x}, {self.y})"
    
    def __add__(self, other):
        """加法运算"""
        return Point(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        """相等比较"""
        return self.x == other.x and self.y == other.y

# 创建点对象
p1 = Point(1, 2)
p2 = Point(3, 4)

# 使用 __str__ 方法
print(p1)  # Point(1, 2)

# 使用 __add__ 方法
p3 = p1 + p2
print(p3)  # Point(4, 6)

# 使用 __eq__ 方法
print(p1 == p2)  # False
print(p1 == Point(1, 2))  # True
</code></pre>

            <h4>综合练习</h4>
            <p>让我们创建一个简单的图书管理系统：</p>
            <pre><code>class Book:
    """图书类"""
    
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = True
    
    def __str__(self):
        status = "可借" if self.available else "已借出"
        return f"《{self.title}》 - {self.author} (ISBN: {self.isbn}) - {status}"

class Library:
    """图书馆类"""
    
    def __init__(self):
        self.books = []
    
    def add_book(self, book):
        """添加图书"""
        self.books.append(book)
        print(f"已添加图书：{book.title}")
    
    def borrow_book(self, isbn):
        """借阅图书"""
        for book in self.books:
            if book.isbn == isbn:
                if book.available:
                    book.available = False
                    print(f"成功借阅：{book.title}")
                    return True
                else:
                    print(f"图书 {book.title} 已被借出")
                    return False
        print(f"未找到 ISBN 为 {isbn} 的图书")
        return False
    
    def return_book(self, isbn):
        """归还图书"""
        for book in self.books:
            if book.isbn == isbn:
                if not book.available:
                    book.available = True
                    print(f"成功归还：{book.title}")
                    return True
                else:
                    print(f"图书 {book.title} 未被借出")
                    return False
        print(f"未找到 ISBN 为 {isbn} 的图书")
        return False
    
    def list_books(self):
        """列出所有图书"""
        if not self.books:
            print("图书馆暂无图书")
            return
        print("图书馆图书列表：")
        for book in self.books:
            print(book)

# 测试图书管理系统
library = Library()

# 添加图书
library.add_book(Book("Python 编程入门", "张三", "978-7-123-45678-9"))
library.add_book(Book("数据结构与算法", "李四", "978-7-987-65432-1"))
library.add_book(Book("机器学习基础", "王五", "978-7-111-22233-3"))

# 列出图书
library.list_books()

# 借阅图书
library.borrow_book("978-7-123-45678-9")

# 再次列出图书
library.list_books()

# 归还图书
library.return_book("978-7-123-45678-9")

# 再次列出图书
library.list_books()
</code></pre>

            <h4>小结</h4>
            <ul>
                <li>面向对象编程将数据和方法组织成对象</li>
                <li>类是对象的模板，对象是类的实例</li>
                <li>继承允许创建子类来继承父类的属性和方法</li>
                <li>封装通过私有属性和公共方法保护对象的内部状态</li>
                <li>多态允许不同类型的对象响应相同的方法调用</li>
                <li>类属性和类方法属于类本身，而不是实例</li>
                <li>特殊方法可以自定义对象的行为</li>
            </ul>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>现在你已经掌握了 Python 的面向对象编程，下一课我们将学习文件操作与异常处理，这是处理实际应用中常见问题的重要技能。</p>
            </div>

            <h4>单元测试</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个关键字用于定义类？
                        <ul>
                            <li>A. class</li>
                            <li>B. def</li>
                            <li>C. object</li>
                            <li>D. type</li>
                        </ul>
                    </li>
                    <li>在 Python 中，类的初始化方法是：
                        <ul>
                            <li>A. __init__</li>
                            <li>B. __new__</li>
                            <li>C. __construct__</li>
                            <li>D. initialize</li>
                        </ul>
                    </li>
                    <li>以下哪个是面向对象编程的特性？
                        <ul>
                            <li>A. 继承</li>
                            <li>B. 多态</li>
                            <li>C. 封装</li>
                            <li>D. 以上都是</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>在 Python 中，双下划线开头的属性是私有属性，外部无法访问。（ ）</li>
                    <li>子类可以继承父类的所有属性和方法。（ ）</li>
                </ol>

                <h5>三、简答题</h5>
                <ol>
                    <li>请简述面向对象编程的三大特性。</li>
                    <li>如何在 Python 中实现继承？</li>
                </ol>
            </div>
        `
    },
    {
        title: "第6课：文件操作与异常处理",
        content: `
            <div class="lesson-intro">
                <h3>Python 文件操作与异常处理</h3>
                <p>在这一课中，我们将学习 Python 中的文件操作和异常处理。文件操作允许你读取和写入文件，而异常处理则帮助你优雅地处理程序运行过程中可能出现的错误。</p>
                <div class="python-logo">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20file%20operations%20and%20exception%20handling%2C%20file%20icons%2C%20error%20messages%2C%20beginner%20friendly%2C%20simple%20background&image_size=square" alt="File Operations and Exception Handling" style="width: 150px; height: 150px; margin: 20px auto; display: block;">
                </div>
            </div>

            <h4>文件操作</h4>
            <p>文件操作是编程中常见的任务，Python 提供了简单而强大的文件操作功能。</p>

            <h5>文件打开模式</h5>
            <table class="operator-table">
                <tr>
                    <th>模式</th>
                    <th>描述</th>
                </tr>
                <tr>
                    <td>r</td>
                    <td>只读模式（默认）</td>
                </tr>
                <tr>
                    <td>w</td>
                    <td>写入模式（覆盖现有文件）</td>
                </tr>
                <tr>
                    <td>a</td>
                    <td>追加模式（在文件末尾添加内容）</td>
                </tr>
                <tr>
                    <td>r+</td>
                    <td>读写模式</td>
                </tr>
                <tr>
                    <td>w+</td>
                    <td>读写模式（覆盖现有文件）</td>
                </tr>
                <tr>
                    <td>a+</td>
                    <td>读写模式（在文件末尾添加内容）</td>
                </tr>
                <tr>
                    <td>x</td>
                    <td>创建模式（创建新文件，如果文件已存在则失败）</td>
                </tr>
            </table>

            <h5>写入文件</h5>
            <pre><code># 写入文件（覆盖模式）
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\n")
    f.write("This is a test.\n")
    f.write("I love programming.\n")

print("文件写入成功！")</code></pre>

            <h5>读取文件</h5>
            <h6>读取整个文件</h6>
            <pre><code>with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)</code></pre>

            <h6>逐行读取</h6>
            <pre><code>with open("example.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())  # strip() 去除换行符和空白字符</code></pre>

            <h6>读取指定行数</h6>
            <pre><code>with open("example.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
    print(f"文件共有 {len(lines)} 行")
    for i, line in enumerate(lines, 1):
        print(f"第 {i} 行: {line.strip()}")</code></pre>

            <h5>追加内容</h5>
            <pre><code>with open("example.txt", "a", encoding="utf-8") as f:
    f.write("\n这是追加的内容。\n")
    f.write("Python 是一种很棒的编程语言！\n")

print("内容追加成功！")</code></pre>

            <h5>文件操作最佳实践</h5>
            <div class="info-box">
                <h5>💡 小提示</h5>
                <p>使用 <code>with</code> 语句来打开文件，这样可以确保文件在使用完毕后自动关闭，避免资源泄露。</p>
            </div>

            <h4>异常处理</h4>
            <p>异常是程序运行过程中出现的错误，如文件不存在、除以零等。Python 提供了异常处理机制，让你可以优雅地处理这些错误。</p>

            <h5>基本异常处理</h5>
            <pre><code>try:
    # 可能会引发异常的代码
    num = int(input("请输入一个数字："))
    result = 10 / num
    print(f"结果：{result}")
except ValueError:
    # 处理值错误（如输入不是数字）
    print("请输入有效的数字！")
except ZeroDivisionError:
    # 处理除零错误
    print("除数不能为零！")
except Exception as e:
    # 处理其他所有异常
    print(f"发生错误：{e}")
finally:
    # 无论是否发生异常都会执行的代码
    print("程序执行完毕。")</code></pre>

            <h5>常见异常类型</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">❌</div>
                    <h5>ValueError</h5>
                    <p>值错误，如无效的转换</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔢</div>
                    <h5>ZeroDivisionError</h5>
                    <p>除零错误</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📁</div>
                    <h5>FileNotFoundError</h5>
                    <p>文件不存在错误</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔑</div>
                    <h5>KeyError</h5>
                    <p>字典键不存在错误</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📏</div>
                    <h5>IndexError</h5>
                    <p>索引超出范围错误</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚠️</div>
                    <h5>Exception</h5>
                    <p>所有异常的基类</p>
                </div>
            </div>

            <h5>异常处理的应用</h5>
            <pre><code>def read_file(filename):
    """读取文件内容"""
    try:
        with open(filename, "r", encoding="utf-8") as f:
            content = f.read()
        return content
    except FileNotFoundError:
        print(f"错误：文件 {filename} 不存在")
        return None
    except UnicodeDecodeError:
        print(f"错误：文件 {filename} 编码格式错误")
        return None
    except Exception as e:
        print(f"错误：{e}")
        return None

# 测试函数
content = read_file("example.txt")
if content:
    print("文件内容：")
    print(content)

content = read_file("nonexistent.txt")
if content:
    print("文件内容：")
    print(content)</code></pre>

            <h5>自定义异常</h5>
            <p>你可以创建自己的异常类来处理特定的错误情况。</p>
            <pre><code>class CustomError(Exception):
    """自定义异常类"""
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

class AgeError(CustomError):
    """年龄错误异常"""
    pass

def check_age(age):
    """检查年龄是否有效"""
    if age < 0:
        raise AgeError("年龄不能为负数")
    elif age > 150:
        raise AgeError("年龄不能超过150岁")
    else:
        print(f"年龄 {age} 是有效的")

# 测试自定义异常
try:
    check_age(20)
    check_age(-5)
except AgeError as e:
    print(f"年龄错误：{e}")
except Exception as e:
    print(f"其他错误：{e}")</code></pre>

            <h4>综合练习</h4>
            <p>让我们创建一个简单的文件管理工具：</p>
            <pre><code>def file_manager():
    """文件管理工具"""
    while True:
        print("\n文件管理工具")
        print("1. 创建文件")
        print("2. 读取文件")
        print("3. 追加内容")
        print("4. 退出")
        
        choice = input("请选择操作：")
        
        if choice == "1":
            # 创建文件
            filename = input("请输入文件名：")
            content = input("请输入文件内容：")
            try:
                with open(filename, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"文件 {filename} 创建成功！")
            except Exception as e:
                print(f"错误：{e}")
                
        elif choice == "2":
            # 读取文件
            filename = input("请输入文件名：")
            try:
                with open(filename, "r", encoding="utf-8") as f:
                    content = f.read()
                print(f"\n文件 {filename} 的内容：")
                print(content)
            except FileNotFoundError:
                print(f"错误：文件 {filename} 不存在")
            except Exception as e:
                print(f"错误：{e}")
                
        elif choice == "3":
            # 追加内容
            filename = input("请输入文件名：")
            content = input("请输入要追加的内容：")
            try:
                with open(filename, "a", encoding="utf-8") as f:
                    f.write("\n" + content)
                print(f"内容追加到文件 {filename} 成功！")
            except Exception as e:
                print(f"错误：{e}")
                
        elif choice == "4":
            # 退出
            print("再见！")
            break
        else:
            print("无效选择，请重新输入")

# 运行文件管理工具
file_manager()</code></pre>

            <h4>小结</h4>
            <ul>
                <li>文件操作是编程中常见的任务，Python 提供了简单而强大的文件操作功能</li>
                <li>使用 <code>with</code> 语句来打开文件，可以确保文件在使用完毕后自动关闭</li>
                <li>文件打开模式决定了文件的操作方式（读、写、追加等）</li>
                <li>异常是程序运行过程中出现的错误，如文件不存在、除以零等</li>
                <li>使用 <code>try-except</code> 语句来捕获和处理异常</li>
                <li>可以创建自定义异常类来处理特定的错误情况</li>
                <li>异常处理可以使程序更加健壮，避免因为错误而崩溃</li>
            </ul>

            <div class="next-step">
                <h5>🚀 学习总结</h5>
                <p>恭喜你完成了 Python 基础课程的全部内容！你已经掌握了：</p>
                <ul>
                    <li>Python 介绍与安装</li>
                    <li>Python 基础语法</li>
                    <li>Python 数据结构</li>
                    <li>函数与模块</li>
                    <li>面向对象编程</li>
                    <li>文件操作与异常处理</li>
                </ul>
                <p>这些知识为你打下了坚实的 Python 编程基础。接下来，你可以尝试：</p>
                <ul>
                    <li>学习 Python 的高级特性，如装饰器、生成器等</li>
                    <li>尝试使用 Python 库进行数据分析、Web 开发等</li>
                    <li>参与开源项目，提升实战经验</li>
                    <li>解决实际问题，巩固所学知识</li>
                </ul>
                <p>祝你在 Python 编程的道路上越走越远！</p>
            </div>

            <h4>单元测试</h4>
            <div class="quiz-section">
                <h5>一、选择题</h5>
                <ol>
                    <li>以下哪个模式用于追加内容到文件？
                        <ul>
                            <li>A. r</li>
                            <li>B. w</li>
                            <li>C. a</li>
                            <li>D. x</li>
                        </ul>
                    </li>
                    <li>以下哪个语句用于捕获异常？
                        <ul>
                            <li>A. try</li>
                            <li>B. except</li>
                            <li>C. finally</li>
                            <li>D. raise</li>
                        </ul>
                    </li>
                    <li>使用 with 语句打开文件的优点是：
                        <ul>
                            <li>A. 代码更简洁</li>
                            <li>B. 自动关闭文件</li>
                            <li>C. 提高执行速度</li>
                            <li>D. 节省内存</li>
                        </ul>
                    </li>
                </ol>

                <h5>二、判断题</h5>
                <ol>
                    <li>使用 w 模式打开文件会覆盖原有内容。（ ）</li>
                    <li>异常处理可以使程序更加健壮，避免因为错误而崩溃。（ ）</li>
                </ol>

                <h5>三、简答题</h5>
                <ol>
                    <li>请简述 Python 中文件打开的不同模式及其用途。</li>
                    <li>如何创建和使用自定义异常？</li>
                </ol>
            </div>
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
