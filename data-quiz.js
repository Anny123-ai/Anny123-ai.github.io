const dataQuizzes = [
    // 第1单元测验：认识数据分析
    {
        unit: 1,
        title: "测验：认识数据分析",
        questions: [
            {
                question: "1. 什么是数据分析？",
                options: [
                    "A. 用电脑画画",
                    "B. 从数据中找出有用的信息",
                    "C. 写小说",
                    "D. 做网页"
                ],
                answer: "B",
                explanation: "数据分析就是从一堆数据里找出有用的信息，帮助我们做决策。"
            },
            {
                question: "2. 数据分析的流程是哪5步？",
                options: [
                    "A. 吃饭、睡觉、打游戏、看电视、逛街",
                    "B. 明确问题、收集数据、整理数据、分析数据、得出结论",
                    "C. 写代码、运行代码、改代码、提交代码、发布代码",
                    "D. 看书、听课、做作业、考试、毕业"
                ],
                answer: "B",
                explanation: "数据分析的标准流程：明确问题→收集数据→整理数据→分析数据→得出结论。"
            },
            {
                question: "3. Excel是用于什么的工具？",
                options: [
                    "A. 玩游戏",
                    "B. 听音乐",
                    "C. 数据处理和分析",
                    "D. 看电影"
                ],
                answer: "C",
                explanation: "Excel是最常用的数据处理和分析工具，适合处理表格数据和简单计算。"
            },
            {
                question: "4. Python在数据分析中主要用于什么？",
                options: [
                    "A. 画画",
                    "B. 播放视频",
                    "C. 处理大量数据和复杂分析",
                    "D. 打游戏"
                ],
                answer: "C",
                explanation: "Python功能强大，适合处理大量数据，支持复杂的数据分析和机器学习任务。"
            },
            {
                question: "5. 数据可视化可以让数据变得怎么样？",
                options: [
                    "A. 更难理解",
                    "B. 更复杂",
                    "C. 更直观易懂",
                    "D. 更难处理"
                ],
                answer: "C",
                explanation: "数据可视化通过图表将数据直观地展示出来，让人一眼就能看出规律和趋势。"
            }
        ]
    },
    // 第2单元测验：Excel基础入门
    {
        unit: 2,
        title: "测验：Excel基础入门",
        questions: [
            {
                question: "1. 在Excel中，SUM函数的作用是什么？",
                options: [
                    "A. 求最大值",
                    "B. 求最小值",
                    "C. 求和",
                    "D. 求平均值"
                ],
                answer: "C",
                explanation: "SUM函数用于计算选定区域的数值之和，是最常用的Excel函数之一。"
            },
            {
                question: "2. AVERAGE函数用于计算什么？",
                options: [
                    "A. 总和",
                    "B. 个数",
                    "C. 平均值",
                    "D. 最大值"
                ],
                answer: "C",
                explanation: "AVERAGE函数用于计算选定区域的平均值，是统计分析中最常用的函数。"
            },
            {
                question: "3. 如果单元格显示'#####'，应该怎么办？",
                options: [
                    "A. 删除数据",
                    "B. 把列拉宽",
                    "C. 关闭电脑",
                    "D. 重启Excel"
                ],
                answer: "B",
                explanation: "'#####'表示列宽不够，无法显示完整数据。只需将列拉宽即可正常显示。"
            },
            {
                question: "4. MAX函数的作用是什么？",
                options: [
                    "A. 计算平均值",
                    "B. 计算总和",
                    "C. 找出最大值",
                    "D. 找出最小值"
                ],
                answer: "C",
                explanation: "MAX函数用于找出选定区域中的最大值，常用于分析数据中的最高点。"
            },
            {
                question: "5. COUNT函数用于统计什么？",
                options: [
                    "A. 总和",
                    "B. 平均值",
                    "C. 包含数字的单元格数量",
                    "D. 最大值"
                ],
                answer: "C",
                explanation: "COUNT函数统计选定区域中包含数字的单元格个数，不统计文本内容。"
            }
        ]
    },
    // 第3单元测验：数据可视化
    {
        unit: 3,
        title: "测验：数据可视化",
        questions: [
            {
                question: "1. 折线图最适合展示什么类型的数据？",
                options: [
                    "A. 不同类别的对比",
                    "B. 时间变化趋势",
                    "C. 占比关系",
                    "D. 地理位置"
                ],
                answer: "B",
                explanation: "折线图最适合展示随时间变化的趋势，可以清晰地看出数据的升降变化。"
            },
            {
                question: "2. 饼图最适合展示什么类型的数据？",
                options: [
                    "A. 时间趋势",
                    "B. 不同类别的占比",
                    "C. 地理位置",
                    "D. 数量大小"
                ],
                answer: "B",
                explanation: "饼图最适合展示各部分占总体的比例关系，但类别不宜过多（最好不超过5个）。"
            },
            {
                question: "3. 柱形图最适合做什么？",
                options: [
                    "A. 展示时间趋势",
                    "B. 比较不同类别的大小",
                    "C. 展示占比",
                    "D. 展示地理分布"
                ],
                answer: "B",
                explanation: "柱形图最适合比较不同类别的大小和数量，是最常用的图表类型之一。"
            },
            {
                question: "4. 制作图表的第一步是什么？",
                options: [
                    "A. 直接插入图表",
                    "B. 选中要展示的数据",
                    "C. 删除数据",
                    "D. 关闭Excel"
                ],
                answer: "B",
                explanation: "制作图表的第一步是选中要展示的数据区域，然后才能插入合适的图表。"
            },
            {
                question: "5. 图表标题的作用是什么？",
                options: [
                    "A. 没有作用",
                    "B. 让图表更好看",
                    "C. 告诉别人这张图在说什么",
                    "D. 增加文件大小"
                ],
                answer: "C",
                explanation: "图表标题告诉别人这张图在展示什么内容，是图表的重要组成部分。"
            }
        ]
    },
    // 第4单元测验：数据透视表
    {
        unit: 4,
        title: "测验：数据透视表",
        questions: [
            {
                question: "1. 数据透视表最主要的作用是什么？",
                options: [
                    "A. 画画",
                    "B. 打字",
                    "C. 快速汇总和分析大量数据",
                    "D. 上网"
                ],
                answer: "C",
                explanation: "数据透视表是Excel最强大的功能之一，可以快速从大量数据中提取汇总信息。"
            },
            {
                question: "2. 在数据透视表中，'值'字段区域通常放什么？",
                options: [
                    "A. 日期",
                    "B. 产品名称",
                    "C. 要计算的数值（如销售额）",
                    "D. 备注"
                ],
                answer: "C",
                explanation: "'值'区域通常放需要计算的数值字段，如销售额、数量等，系统会自动进行汇总计算。"
            },
            {
                question: "3. 当源数据更新后，数据透视表需要做什么？",
                options: [
                    "A. 删除重建",
                    "B. 右键刷新",
                    "C. 关闭Excel",
                    "D. 什么都不用做"
                ],
                answer: "B",
                explanation: "数据透视表不会自动更新，需要右键点击数据透视表，选择'刷新'来更新数据。"
            },
            {
                question: "4. 在数据透视表中，'行'字段区域的作用是什么？",
                options: [
                    "A. 放要计算的数值",
                    "B. 按什么分类显示数据",
                    "C. 筛选数据",
                    "D. 删除数据"
                ],
                answer: "B",
                explanation: "'行'区域决定数据按什么类别分组显示，如按产品、按月份等。"
            },
            {
                question: "5. 数据透视表相比普通表格的优势是什么？",
                options: [
                    "A. 更难使用",
                    "B. 需要更多时间",
                    "C. 能快速从多角度分析数据",
                    "D. 不能汇总"
                ],
                answer: "C",
                explanation: "数据透视表可以快速从不同角度分析数据，一键生成各种汇总报表。"
            }
        ]
    },
    // 第5单元测验：Python入门
    {
        unit: 5,
        title: "测验：Python入门",
        questions: [
            {
                question: "1. 在Python中，如何定义一个变量name='小明'？",
                options: [
                    "A. name = '小明'",
                    "B. name == '小明'",
                    "C. var name = '小明'",
                    "D. let name = '小明'"
                ],
                answer: "A",
                explanation: "Python中使用单个等号(=)来赋值，不需要声明变量类型，直接赋值即可使用。"
            },
            {
                question: "2. 列表的索引是从哪个数字开始的？",
                options: [
                    "A. 1",
                    "B. 0",
                    "C. -1",
                    "D. 2"
                ],
                answer: "B",
                explanation: "Python列表的索引从0开始，第一个元素的索引是0，第二个是1，依此类推。"
            },
            {
                question: "3. 如何计算列表scores=[85, 92, 78]的总和？",
                options: [
                    "A. avg(scores)",
                    "B. sum(scores)",
                    "C. total(scores)",
                    "D. add(scores)"
                ],
                answer: "B",
                explanation: "使用sum()函数可以计算列表中所有数值的和，是Python内置函数。"
            },
            {
                question: "4. Python中如何表示注释？",
                options: [
                    "A. /* 注释 */",
                    "B. // 注释",
                    "C. # 注释",
                    "D. <!-- 注释 -->"
                ],
                answer: "C",
                explanation: "Python中使用#符号表示单行注释，#后面的内容不会被执行。"
            },
            {
                question: "5. len()函数的作用是什么？",
                options: [
                    "A. 计算列表元素的和",
                    "B. 计算列表元素的平均值",
                    "C. 获取列表的长度（元素个数）",
                    "D. 找出最大值"
                ],
                answer: "C",
                explanation: "len()函数返回列表中元素的个数，是Python中最常用的函数之一。"
            }
        ]
    },
    // 第6单元测验：Pandas数据处理
    {
        unit: 6,
        title: "测验：Pandas数据处理",
        questions: [
            {
                question: "1. Pandas中的DataFrame相当于Excel中的什么？",
                options: [
                    "A. 一个单元格",
                    "B. 一个工作簿",
                    "C. 一个工作表",
                    "D. 一个图表"
                ],
                answer: "C",
                explanation: "DataFrame就像Excel中的一个工作表，是二维表格结构，由行和列组成。"
            },
            {
                question: "2. 如何读取名为'sales.csv'的CSV文件？",
                options: [
                    "A. pd.read('sales.csv')",
                    "B. pd.read_csv('sales.csv')",
                    "C. pd.open('sales.csv')",
                    "D. pd.load('sales.csv')"
                ],
                answer: "B",
                explanation: "使用pd.read_csv()函数可以读取CSV格式的文件，是Pandas最常用的数据读取方法。"
            },
            {
                question: "3. df.head()函数的作用是什么？",
                options: [
                    "A. 查看前5行数据",
                    "B. 查看后5行数据",
                    "C. 删除前5行",
                    "D. 插入新行"
                ],
                answer: "A",
                explanation: "head()函数默认查看DataFrame的前5行数据，常用于快速了解数据结构。"
            },
            {
                question: "4. 如何筛选分数大于80的行？",
                options: [
                    "A. df.find(分数 > 80)",
                    "B. df[分数 > 80]",
                    "C. df.select(分数 > 80)",
                    "D. df.filter(分数 > 80)"
                ],
                answer: "B",
                explanation: "在Pandas中，直接用方括号加条件可以筛选满足条件的行，如 df[df['分数'] > 80]。"
            },
            {
                question: "5. groupby()函数的作用是什么？",
                options: [
                    "A. 删除重复数据",
                    "B. 按某一列分组汇总",
                    "C. 排序数据",
                    "D. 筛选数据"
                ],
                answer: "B",
                explanation: "groupby()函数用于按某一列（或多列）对数据进行分组，然后进行汇总统计。"
            }
        ]
    },
    // 第7单元测验：Python数据可视化
    {
        unit: 7,
        title: "测验：Python数据可视化",
        questions: [
            {
                question: "1. Matplotlib是用于什么的Python库？",
                options: [
                    "A. 数据处理",
                    "B. 数据存储",
                    "C. 数据可视化（画图）",
                    "D. 网络编程"
                ],
                answer: "C",
                explanation: "Matplotlib是Python最常用的数据可视化库，可以画出各种类型的图表。"
            },
            {
                question: "2. 如何设置中文字体避免显示乱码？",
                options: [
                    "A. 不需要设置",
                    "B. plt.set_font('Chinese')",
                    "C. plt.rcParams['font.sans-serif'] = ['SimHei']",
                    "D. font.chinese()"
                ],
                answer: "C",
                explanation: "需要通过plt.rcParams设置中文字体参数，指定使用支持中文的字体（如SimHei）。"
            },
            {
                question: "3. plt.show()的作用是什么？",
                options: [
                    "A. 保存图片",
                    "B. 显示图表窗口",
                    "C. 清除图表",
                    "D. 关闭图表"
                ],
                answer: "B",
                explanation: "plt.show()用于显示所有创建的图表，打开一个图形窗口显示结果。"
            },
            {
                question: "4. plt.figure(figsize=(10, 6))的作用是什么？",
                options: [
                    "A. 设置图表颜色",
                    "B. 设置图表大小（宽10高6英寸）",
                    "C. 设置标题",
                    "D. 设置图例"
                ],
                answer: "B",
                explanation: "figsize参数设置图表的宽度和高度，单位是英寸，用于控制图表的整体大小。"
            },
            {
                question: "5. plt.plot()用于画什么图？",
                options: [
                    "A. 饼图",
                    "B. 柱形图",
                    "C. 折线图",
                    "D. 散点图"
                ],
                answer: "C",
                explanation: "plt.plot()用于绘制折线图，是Matplotlib中最基本的绘图函数。"
            }
        ]
    },
    // 第8单元测验：实战项目
    {
        unit: 8,
        title: "测验：实战项目",
        questions: [
            {
                question: "1. 数据分析项目的第一步是什么？",
                options: [
                    "A. 直接开始画图",
                    "B. 明确分析目标",
                    "C. 删除所有数据",
                    "D. 发布到网上"
                ],
                answer: "B",
                explanation: "数据分析的第一步是明确分析目标，知道要解决什么问题，找到什么答案。"
            },
            {
                question: "2. 在分析报告中，哪项不是必需的？",
                options: [
                    "A. 项目概述",
                    "B. 数据说明",
                    "C. 分析发现",
                    "D. 个人简历"
                ],
                answer: "D",
                explanation: "分析报告应包含项目概述、数据说明、分析发现和结论建议，个人简历不是必需的。"
            },
            {
                question: "3. 数据清洗主要处理什么？",
                options: [
                    "A. 清洁桌面",
                    "B. 处理缺失值和异常值",
                    "C. 打印数据",
                    "D. 加密数据"
                ],
                answer: "B",
                explanation: "数据清洗主要处理缺失值、重复值、异常值等问题，确保数据质量。"
            },
            {
                question: "4. 分析报告的结论建议部分应该包含什么？",
                options: [
                    "A. 随便写什么",
                    "B. 基于数据分析得出的具体建议",
                    "C. 天气预报",
                    "D. 食谱"
                ],
                answer: "B",
                explanation: "结论建议应基于数据分析的结果，提出切实可行的改进建议或决策支持。"
            },
            {
                question: "5. 在数据分析中，'数据探索'阶段的目的是什么？",
                options: [
                    "A. 删除所有数据",
                    "B. 了解数据的基本情况和结构",
                    "C. 发送邮件",
                    "D. 玩游戏"
                ],
                answer: "B",
                explanation: "数据探索是为了了解数据的类型、结构、分布等基本信息，为后续分析打基础。"
            }
        ]
    }
];
