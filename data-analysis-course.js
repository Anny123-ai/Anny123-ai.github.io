let currentLessonIndex = 0;

const lessons = [
    {
        title: "第1单元：认识数据分析（小白必看）",
        content: `
            <div class="lesson-intro">
                <h3>认识数据分析</h3>
                <p>你是否好奇，外卖平台怎么知道你喜欢吃什么？购物推荐怎么那么准？这都是数据分析的魔力！
                本单元将带你用最简单的方式认识数据分析，不需要任何基础，马上就能入门！</p>
            </div>

            <h4>一、什么是数据分析？（通俗版）</h4>
            <div class="info-box">
                <h5>💡 一句话解释</h5>
                <p>数据分析就是：<strong>从一堆数据里找出有用的信息</strong>，就像在乱麻中理出头绪一样！</p>
            </div>
            
            <h5>举个例子</h5>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>老板问</h5>
                    <p>这个月我们卖了多少东西？哪个产品卖得最好？</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h5>数据分析</h5>
                    <p>查看销售记录，计算销量，找出热销产品</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h5>得出结论</h5>
                    <p>知道该多生产哪个产品，下个月怎么做活动</p>
                </div>
            </div>

            <h4>二、为什么要学数据分析？</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h5>找工作必备</h5>
                    <p>现在很多工作都要求会数据分析，待遇还很好！</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h5>做决策更靠谱</h5>
                    <p>用数据说话，而不是凭感觉瞎猜</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <h5>思维更清晰</h5>
                    <p>学会用数据思考，逻辑能力大大提升</p>
                </div>
            </div>

            <h4>三、数据分析的流程（5步走）</h4>
            <div class="info-box">
                <h5>📝 简单5步</h5>
                <ol>
                    <li><strong>明确问题</strong> - 你想知道什么？</li>
                    <li><strong>收集数据</strong> - 找到相关的数据</li>
                    <li><strong>整理数据</strong> - 把数据清洗干净</li>
                    <li><strong>分析数据</strong> - 找规律、算数值</li>
                    <li><strong>得出结论</strong> - 给出答案和建议</li>
                </ol>
            </div>

            <h4>四、数据分析的工具</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>Excel</h5>
                    <p>最简单、最常用，入门首选！</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🐍</div>
                    <h5>Python</h5>
                    <p>功能强大，适合处理大量数据</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h5>可视化工具</h5>
                    <p>把数据变成漂亮的图表</p>
                </div>
            </div>

            <h4>五、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 思考一下</h5>
                <ol>
                    <li>你在生活中遇到过哪些需要数据分析的场景？</li>
                    <li>想想你最想通过数据分析解决什么问题？</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>恭喜你对数据分析有了基本认识！接下来我们从最简单的Excel开始学习！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>准备好开启数据分析之旅了吗？让我们从Excel基础开始！</p>
            </div>
        `
    },
    {
        title: "第2单元：Excel基础入门",
        content: `
            <div class="lesson-intro">
                <h3>Excel基础入门</h3>
                <p>Excel是数据分析最常用的工具，几乎人人都在用！本单元带你从零开始认识Excel，
                掌握最实用的基础操作，让你马上就能用上！</p>
            </div>

            <h4>一、认识Excel界面</h4>
            <div class="info-box">
                <h5>💡 Excel的基本元素</h5>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📦</div>
                        <h5>工作簿</h5>
                        <p>整个Excel文件，就像一本书</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📄</div>
                        <h5>工作表</h5>
                        <p>书中的每一页，可以切换</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔲</div>
                        <h5>单元格</h5>
                        <p>最小的格子，用来输入内容</p>
                    </div>
                </div>
            </div>

            <h4>二、数据录入技巧</h4>
            <div class="info-box">
                <h5>📝 快速录入</h5>
                <ul>
                    <li><strong>填充柄</strong> - 选中单元格右下角的小方块，往下拉可以自动填充</li>
                    <li><strong>序列填充</strong> - 输入1、2，选中后往下拉，自动生成3、4、5...</li>
                    <li><strong>快捷键</strong> - Ctrl+C复制，Ctrl+V粘贴，Ctrl+S保存</li>
                </ul>
            </div>

            <h4>三、基础函数</h4>
            <h5>1. SUM（求和）</h5>
            <pre><code>=SUM(A1:A5)       求A1到A5的和
=SUM(A1,C1,E1)   求A1、C1、E1的和</code></pre>

            <h5>2. AVERAGE（求平均）</h5>
            <pre><code>=AVERAGE(A1:A5)  求A1到A5的平均值</code></pre>

            <h5>3. MAX/MIN（最大/最小）</h5>
            <pre><code>=MAX(A1:A5)      找最大值
=MIN(A1:A5)      找最小值</code></pre>

            <h5>4. COUNT（计数）</h5>
            <pre><code>=COUNT(A1:A5)    计算有多少个数字</code></pre>

            <h4>四、数据格式化</h4>
            <div class="info-box">
                <h5>🎨 让数据更好看</h5>
                <ul>
                    <li>调整列宽行高</li>
                    <li>设置字体、颜色、边框</li>
                    <li>添加条件格式（比如让大于100的数字变红色）</li>
                    <li>转换成表格样式</li>
                </ul>
            </div>

            <h4>五、常见问题</h4>
            <div class="faq">
                <h5>Q1：单元格里显示 ##### 怎么办？</h5>
                <p>列太窄啦！把列拉宽一点就行！</p>
            </div>

            <div class="faq">
                <h5>Q2：怎么快速求和？</h5>
                <p>选中要计算的区域，看Excel右下角，自动显示求和、平均、计数！</p>
            </div>

            <h4>六、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 动手试试</h5>
                <ol>
                    <li>创建一个Excel表格，记录你一周的开销</li>
                    <li>用SUM函数计算总开销</li>
                    <li>用AVERAGE计算平均每天花多少钱</li>
                    <li>找出花费最多的一天</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>太棒了！你已经掌握Excel基础了！接下来我们学习如何用Excel做图表！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>数据可视化可以让数据说话更有力量！让我们学习如何做图表！</p>
            </div>
        `
    },
    {
        title: "第3单元：数据可视化（Excel图表）",
        content: `
            <div class="lesson-intro">
                <h3>数据可视化</h3>
                <p>一图胜千言！好的图表能让数据一目了然！本单元教你用Excel制作各种漂亮的图表，
                让你的数据分析结果更加直观、专业！</p>
            </div>

            <h4>一、为什么需要图表？</h4>
            <div class="info-box">
                <h5>💡 看个例子</h5>
                <p>同样是销售数据，你觉得哪个更容易理解？</p>
                <ul>
                    <li>1月50万，2月45万，3月68万，4月72万...</li>
                    <li>一张上升的折线图 📈</li>
                </ul>
                <p>没错！图表能让人一眼看出趋势和规律！</p>
            </div>

            <h4>二、常见图表类型</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>柱形图</h5>
                    <p>比较不同类别的大小，比如各产品销量对比</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h5>折线图</h5>
                    <p>看趋势变化，比如每月销量变化</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🥧</div>
                    <h5>饼图</h5>
                    <p>看占比，比如各产品占总销量的比例</p>
                </div>
            </div>

            <h4>三、制作图表的步骤</h4>
            <div class="info-box">
                <h5>📝 简单3步</h5>
                <ol>
                    <li><strong>选中数据</strong> - 把你要展示的数据选中</li>
                    <li><strong>插入图表</strong> - 点击"插入"选项卡，选择图表类型</li>
                    <li><strong>美化图表</strong> - 添加标题、调整颜色、设置格式</li>
                </ol>
            </div>

            <h4>四、图表美化技巧</h4>
            <h5>1. 选择合适的颜色</h5>
            <div class="info-box">
                <h5>🎨 配色建议</h5>
                <ul>
                    <li>不要用太多种颜色，2-3种就好</li>
                    <li>同一类数据用同一种颜色</li>
                    <li>重要数据可以用高亮色</li>
                </ul>
            </div>

            <h5>2. 添加必要的元素</h5>
            <div class="info-box">
                <h5>📋 图表必备</h5>
                <ul>
                    <li><strong>图表标题</strong> - 告诉别人这张图在说什么</li>
                    <li><strong>坐标轴标签</strong> - 说明横轴、纵轴是什么</li>
                    <li><strong>数据标签</strong> - 显示具体数值（可选）</li>
                    <li><strong>图例</strong> - 说明不同颜色代表什么</li>
                </ul>
            </div>

            <h4>五、常见问题</h4>
            <div class="faq">
                <h5>Q1：什么时候用柱形图？什么时候用折线图？</h5>
                <p>比较不同项目用柱形图，看时间变化趋势用折线图！</p>
            </div>

            <div class="faq">
                <h5>Q2：饼图适合展示什么数据？</h5>
                <p>饼图适合展示占比，但类别最好不要超过5个，太多会很乱！</p>
            </div>

            <h4>六、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 动手试试</h5>
                <ol>
                    <li>找一组数据（比如考试成绩、每月开销等）</li>
                    <li>用柱形图对比不同类别</li>
                    <li>用折线图看趋势</li>
                    <li>给图表加上标题和标签，好好美化一下</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>恭喜你！现在你能做出漂亮的图表了！接下来我们学习更高级的Excel功能！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>让我们学习Excel的高级功能：数据透视表！</p>
            </div>
        `
    },
    {
        title: "第4单元：数据透视表（神器！）",
        content: `
            <div class="lesson-intro">
                <h3>数据透视表</h3>
                <p>数据透视表是Excel最强大的功能之一！它能在几秒钟内把一堆杂乱的数据变成清晰的汇总表格，
                让你快速洞察数据背后的秘密！</p>
            </div>

            <h4>一、什么是数据透视表？</h4>
            <div class="info-box">
                <h5>💡 通俗理解</h5>
                <p>数据透视表就是：<strong>把数据按你想要的方式重新排列、汇总</strong>！</p>
                <p>比如：你有一年的销售记录，想知道：</p>
                <ul>
                    <li>每个月卖了多少？</li>
                    <li>每个产品卖了多少？</li>
                    <li>哪个销售员业绩最好？</li>
                </ul>
                <p>用数据透视表，几秒钟就能得到答案！</p>
            </div>

            <h4>二、什么时候用数据透视表？</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📦</div>
                    <h5>数据量大</h5>
                    <p>几百几千行数据，用公式太慢</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔄</div>
                    <h5>需要多角度分析</h5>
                    <p>想看不同维度的汇总</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h5>快速汇总</h5>
                    <p>不想写复杂公式</p>
                </div>
            </div>

            <h4>三、创建数据透视表</h4>
            <div class="info-box">
                <h5>📝 步骤</h5>
                <ol>
                    <li>选中你的数据区域</li>
                    <li>点击"插入" → "数据透视表"</li>
                    <li>在右侧面板拖拽字段：</li>
                    <ul>
                        <li><strong>行</strong> - 你想按什么分组（如日期、产品）</li>
                        <li><strong>列</strong> - 可选，横向分组</li>
                        <li><strong>值</strong> - 你要计算什么（如销量总和）</li>
                        <li><strong>筛选器</strong> - 可选，筛选数据</li>
                    </ul>
                </ol>
            </div>

            <h4>四、常用汇总方式</h4>
            <h5>1. 求和</h5>
            <p>计算总和，比如总销量、总金额</p>

            <h5>2. 计数</h5>
            <p>统计个数，比如有多少订单、多少客户</p>

            <h5>3. 平均值</h5>
            <p>计算平均值，比如平均订单金额</p>

            <h5>4. 最大值/最小值</h5>
            <p>找最高或最低值</p>

            <h4>五、数据透视表技巧</h4>
            <div class="info-box">
                <h5>✨ 实用技巧</h5>
                <ul>
                    <li><strong>刷新数据</strong> - 源数据改了，右键数据透视表→刷新</li>
                    <li><strong>筛选数据</strong> - 点击字段旁边的小箭头，可以筛选</li>
                    <li><strong>切片器</strong> - 插入→切片器，可以更美观地筛选</li>
                    <li><strong>时间分组</strong> - 日期可以按年/月/日分组</li>
                </ul>
            </div>

            <h4>六、常见问题</h4>
            <div class="faq">
                <h5>Q1：源数据更新了，数据透视表怎么不变？</h5>
                <p>记得右键刷新！或者设置打开时自动刷新！</p>
            </div>

            <h4>七、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 动手试试</h5>
                <ol>
                    <li>找一组数据（可以用之前的开销记录）</li>
                    <li>用数据透视表按类别汇总</li>
                    <li>用数据透视表按日期汇总</li>
                    <li>试试看切片器功能！</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>太厉害了！你已经掌握数据透视表了！接下来我们学习Python！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>Excel很好用，但处理大量数据时Python更强大！让我们开始Python之旅！</p>
            </div>
        `
    },
    {
        title: "第5单元：Python入门（数据分析版）",
        content: `
            <div class="lesson-intro">
                <h3>Python入门（数据分析版）</h3>
                <p>Python是数据分析最流行的语言！别担心，我们只学数据分析需要用的部分，
                简单实用，让你快速上手！</p>
            </div>

            <h4>一、为什么用Python做数据分析？</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚀</div>
                    <h5>速度快</h5>
                    <p>处理几万行数据比Excel快得多</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔄</div>
                    <h5>可重复</h5>
                    <p>写好的代码下次可以直接用</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h5>库丰富</h5>
                    <p>很多现成的工具可以用</p>
                </div>
            </div>

            <h4>二、Python基础</h4>
            <h5>1. 变量（存储数据）</h5>
            <pre><code>name = "小明"
age = 18
height = 1.75</code></pre>

            <h5>2. 数据类型</h5>
            <pre><code># 字符串（文字）
name = "小明"

# 整数
age = 18

# 浮点数（小数）
weight = 65.5

# 布尔值（是/非）
is_student = True</code></pre>

            <h5>3. 列表（存储多个数据）</h5>
            <pre><code># 创建列表
scores = [85, 92, 78, 90, 88]

# 访问列表元素（注意：从0开始）
scores[0]  # 第一个元素：85
scores[-1] # 最后一个元素：88

# 列表常用方法
scores.append(95)  # 添加元素
len(scores)        # 列表长度</code></pre>

            <h4>三、基础运算</h4>
            <pre><code># 加减乘除
a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...</code></pre>

            <h4>四、条件判断</h4>
            <pre><code>score = 85

if score >= 90:
    print("优秀！")
elif score >= 80:
    print("良好！")
elif score >= 60:
    print("及格！")
else:
    print("要加油哦！")</code></pre>

            <h4>五、循环</h4>
            <pre><code># for循环
scores = [85, 92, 78, 90, 88]

for score in scores:
    print(score)

# 计算总和
total = 0
for score in scores:
    total = total + score
print(total)</code></pre>

            <h4>六、常见问题</h4>
            <div class="faq">
                <h5>Q1：Python难学吗？</h5>
                <p>为了数据分析而学Python不难！我们只学必要的部分，不用学太复杂的！</p>
            </div>

            <h4>七、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 动手试试</h5>
                <ol>
                    <li>创建一个列表，存储5个同学的分数</li>
                    <li>用循环计算总分和平均分</li>
                    <li>用条件判断找出不及格的分数</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>很好！你已经有Python基础了！接下来我们学习数据分析神器：Pandas！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>Pandas是Python数据分析的核心工具，让我们一起学习！</p>
            </div>
        `
    },
    {
        title: "第6单元：Pandas数据处理",
        content: `
            <div class="lesson-intro">
                <h3>Pandas数据处理</h3>
                <p>Pandas是Python数据分析的神器！它能让你像用Excel一样处理数据，
                但速度更快、功能更强！让我们开始吧！</p>
            </div>

            <h4>一、什么是Pandas？</h4>
            <div class="info-box">
                <h5>💡 一句话解释</h5>
                <p>Pandas就是：<strong>Python中的超级Excel</strong>！</p>
                <p>它用DataFrame（类似Excel表格）来存储和处理数据，功能非常强大！</p>
            </div>

            <h4>二、导入Pandas</h4>
            <pre><code>import pandas as pd  # pd是大家习惯用的简称</code></pre>

            <h4>三、创建DataFrame</h4>
            <h5>1. 从字典创建</h5>
            <pre><code>data = {
    '姓名': ['小明', '小红', '小华'],
    '年龄': [18, 19, 17],
    '分数': [85, 92, 78]
}
df = pd.DataFrame(data)
print(df)</code></pre>

            <h5>2. 从CSV文件读取</h5>
            <pre><code>df = pd.read_csv('data.csv')  # 读取CSV文件</code></pre>

            <h4>四、查看数据</h4>
            <pre><code>df.head()     # 看前5行
df.tail()     # 看后5行
df.shape      # 看有多少行、多少列
df.info()     # 看数据信息
df.describe() # 看统计信息</code></pre>

            <h4>五、数据选择</h4>
            <h5>1. 选择列</h5>
            <pre><code>df['姓名']        # 选择单列
df[['姓名', '分数']] # 选择多列</code></pre>

            <h5>2. 选择行</h5>
            <pre><code>df.iloc[0]        # 第1行
df.iloc[0:3]      # 前3行</code></pre>

            <h5>3. 条件筛选</h5>
            <pre><code># 分数大于80的行
df[df['分数'] > 80]

# 多个条件
df[(df['分数'] > 80) & (df['年龄'] >= 18)]</code></pre>

            <h4>六、数据计算</h4>
            <pre><code>df['分数'].sum()      # 求和
df['分数'].mean()     # 平均
df['分数'].max()      # 最大
df['分数'].min()      # 最小
df['分数'].count()    # 计数</code></pre>

            <h4>七、分组汇总（类似数据透视表）</h4>
            <pre><code># 按班级分组，计算平均分
df.groupby('班级')['分数'].mean()

# 多个汇总
df.groupby('班级').agg({
    '分数': ['mean', 'max', 'min'],
    '年龄': 'count'
})</code></pre>

            <h4>八、常见问题</h4>
            <div class="faq">
                <h5>Q1：报错说没有pandas模块？</h5>
                <p>需要先安装：<code>pip install pandas</code></p>
            </div>

            <h4>九、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 动手试试</h5>
                <ol>
                    <li>创建一个包含姓名、科目、分数的DataFrame</li>
                    <li>计算平均分、最高分、最低分</li>
                    <li>筛选出分数大于80的数据</li>
                    <li>试试分组汇总功能</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>太棒了！你已经掌握Pandas了！接下来我们学习数据可视化！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>让我们用Python画出漂亮的图表！</p>
            </div>
        `
    },
    {
        title: "第7单元：Python数据可视化",
        content: `
            <div class="lesson-intro">
                <h3>Python数据可视化</h3>
                <p>用Python画图，不仅能画出Excel能画的，还能画出更复杂、更美观的图表！
                本单元教你用Matplotlib和Seaborn画图！</p>
            </div>

            <h4>一、Matplotlib基础</h4>
            <div class="info-box">
                <h5>💡 什么是Matplotlib？</h5>
                <p>Matplotlib是Python最常用的画图库，能画各种类型的图表！</p>
            </div>

            <h4>二、导入库</h4>
            <pre><code>import matplotlib.pyplot as plt
import pandas as pd</code></pre>

            <h4>三、画折线图</h4>
            <pre><code># 数据
months = ['1月', '2月', '3月', '4月', '5月']
sales = [50, 45, 68, 72, 85]

# 画图
plt.figure(figsize=(10, 6))  # 设置图大小
plt.plot(months, sales, marker='o', color='blue', linewidth=2)

# 美化
plt.title('月度销售趋势', fontsize=16)
plt.xlabel('月份', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.grid(True, alpha=0.3)
plt.show()</code></pre>

            <h4>四、画柱形图</h4>
            <pre><code>products = ['产品A', '产品B', '产品C', '产品D']
sales = [120, 85, 95, 110]

plt.figure(figsize=(10, 6))
plt.bar(products, sales, color=['#11998e', '#38ef7d', '#00c6fb', '#005bea'])

plt.title('各产品销量对比', fontsize=16)
plt.xlabel('产品', fontsize=12)
plt.ylabel('销量', fontsize=12)
plt.xticks(rotation=45)
plt.show()</code></pre>

            <h4>五、画饼图</h4>
            <pre><code>categories = ['食品', '服装', '电子产品', '其他']
sales = [35, 25, 30, 10]
colors = ['#ff9a9e', '#fecfef', '#a18cd1', '#fbc2eb']

plt.figure(figsize=(8, 8))
plt.pie(sales, labels=categories, colors=colors, autopct='%1.1f%%', 
        shadow=True, startangle=90)
plt.title('各类别销售占比', fontsize=16)
plt.axis('equal')  # 保证是圆形
plt.show()</code></pre>

            <h4>六、Seaborn进阶</h4>
            <div class="info-box">
                <h5>💡 什么是Seaborn？</h5>
                <p>Seaborn在Matplotlib基础上做了封装，画图更简单、更美观！</p>
            </div>

            <h5>Seaborn箱线图</h5>
            <pre><code>import seaborn as sns

# 设置风格
sns.set_style('whitegrid')

# 画图
plt.figure(figsize=(10, 6))
sns.boxplot(x='班级', y='分数', data=df)
plt.title('各班级分数分布', fontsize=16)
plt.show()</code></pre>

            <h4>七、常见问题</h4>
            <div class="faq">
                <h5>Q1：图表里中文显示成方框？</h5>
                <p>需要设置中文字体：<code>plt.rcParams['font.sans-serif'] = ['SimHei']</code></p>
            </div>

            <h4>八、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 动手试试</h5>
                <ol>
                    <li>找一组你感兴趣的数据</li>
                    <li>分别用Matplotlib画折线图、柱形图、饼图</li>
                    <li>试着添加标题、标签、调整颜色</li>
                    <li>如果有兴趣，试试Seaborn！</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>✅ 完成标志</h5>
                <p>太厉害了！你已经能用Python画图了！接下来我们进行实战项目！</p>
            </div>

            <div class="next-step">
                <h5>🚀 下一步</h5>
                <p>让我们把学到的知识都用起来，完成一个完整的数据分析项目！</p>
            </div>
        `
    },
    {
        title: "第8单元：实战项目：销售数据分析",
        content: `
            <div class="lesson-intro">
                <h3>实战项目：销售数据分析</h3>
                <p>恭喜你学到最后一个单元！现在让我们把所有知识串起来，
                完成一个完整的数据分析项目！</p>
            </div>

            <h4>一、项目背景</h4>
            <div class="info-box">
                <h5>📊 场景</h5>
                <p>你是一家公司的数据分析员，老板给了你一年的销售数据，
                让你分析一下：<br>
                1. 整体销售情况怎么样？<br>
                2. 哪些产品卖得好？<br>
                3. 哪个月是旺季？<br>
                4. 给一些销售建议。</p>
            </div>

            <h4>二、分析步骤</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">📥</div>
                    <h5>1. 导入数据</h5>
                    <p>读取数据文件</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h5>2. 数据探索</h5>
                    <p>了解数据概况</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🧹</div>
                    <h5>3. 数据清洗</h5>
                    <p>处理缺失值、异常值</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h5>4. 数据分析</h5>
                    <p>多角度分析</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h5>5. 可视化</h5>
                    <p>画图表展示</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📋</div>
                    <h5>6. 结论建议</h5>
                    <p>总结发现，给出建议</p>
                </div>
            </div>

            <h4>三、示例代码</h4>
            <h5>1. 导入和查看数据</h5>
            <pre><code>import pandas as pd
import matplotlib.pyplot as plt

# 读取数据
df = pd.read_csv('sales_data.csv')

# 查看数据
print(df.head())
print(df.info())
print(df.describe())</code></pre>

            <h5>2. 时间趋势分析</h5>
            <pre><code># 按月份汇总
df['日期'] = pd.to_datetime(df['日期'])
df['月份'] = df['日期'].dt.month
monthly_sales = df.groupby('月份')['销售额'].sum()

# 画趋势图
plt.figure(figsize=(12, 6))
monthly_sales.plot(kind='line', marker='o', color='#11998e', linewidth=2)
plt.title('月度销售额趋势', fontsize=16)
plt.xlabel('月份', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.grid(True, alpha=0.3)
plt.show()</code></pre>

            <h5>3. 产品分析</h5>
            <pre><code># 按产品汇总
product_sales = df.groupby('产品')['销售额'].sum().sort_values(ascending=False)

# 画柱形图
plt.figure(figsize=(12, 6))
product_sales.plot(kind='bar', color='#38ef7d')
plt.title('各产品销售额', fontsize=16)
plt.xlabel('产品', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.xticks(rotation=45)
plt.show()</code></pre>

            <h4>四、分析报告</h4>
            <div class="info-box">
                <h5>📋 报告结构</h5>
                <ol>
                    <li><strong>项目概述</strong> - 背景、目标</li>
                    <li><strong>数据说明</strong> - 数据来源、字段说明</li>
                    <li><strong>分析发现</strong> - 你发现了什么规律</li>
                    <li><strong>可视化展示</strong> - 用图表说明</li>
                    <li><strong>结论建议</strong> - 给出具体建议</li>
                </ol>
            </div>

            <h4>五、给你的小任务</h4>
            <div class="quiz-section">
                <h5>🎯 完成一个项目</h5>
                <ol>
                    <li>找一组你感兴趣的数据（可以用公开数据集）</li>
                    <li>用Python完成完整的分析流程</li>
                    <li>画一些漂亮的图表</li>
                    <li>写一份简单的分析报告</li>
                </ol>
            </div>

            <div class="success-box">
                <h5>🎉 恭喜毕业！</h5>
                <p>你已经完成了整个数据分析课程！从Excel到Python，从基础到实战，
                你已经掌握了数据分析的核心技能！继续练习，你会越来越厉害！</p>
            </div>

            <div class="next-step">
                <h5>🚀 继续学习</h5>
                <p>数据分析还有很多高级内容等着你：SQL、机器学习、深度学习...
                但你现在的基础已经很好了，继续加油！</p>
            </div>
        `
    }
];

function renderLessonsList() {
    const container = document.getElementById('lesson-list-container');
    container.innerHTML = lessons.map((lesson, index) => `
        <div class="lesson-card" onclick="showLesson(${index})">
            <div class="lesson-number">${index + 1}</div>
            <h4>${lesson.title}</h4>
            <p>点击开始学习</p>
            <button class="btn">开始学习</button>
        </div>
    `).join('');
}

function showLesson(index) {
    currentLessonIndex = index;
    document.getElementById('lessons-section').classList.add('hidden');
    document.getElementById('lesson-detail-section').classList.remove('hidden');
    
    document.getElementById('lesson-title').textContent = lessons[index].title;
    document.getElementById('lesson-content').innerHTML = lessons[index].content;
    
    // 显示选择题练习
    if (typeof renderQuiz !== 'undefined') {
        renderQuiz(index);
    }
    
    // 更新导航按钮状态
    updateNavButtons();
}

function showLessonsList() {
    document.getElementById('lessons-section').classList.remove('hidden');
    document.getElementById('lesson-detail-section').classList.add('hidden');
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
    document.getElementById('prev-btn').style.visibility = 
        currentLessonIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').style.visibility = 
        currentLessonIndex === lessons.length - 1 ? 'hidden' : 'visible';
}

// 页面加载完成后渲染课程列表
document.addEventListener('DOMContentLoaded', renderLessonsList);
