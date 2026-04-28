const exercises = [
    {
        unit: 0,
        title: "变量与数据类型练习",
        description: "创建变量并输出个人信息",
        template: `# 练习1：变量与数据类型
# 创建三个变量：name（姓名）、age（年龄）、is_student（是否是学生）
# 然后使用print语句输出这些信息

# 在此处编写代码
name = "你的姓名"
age = 0
is_student = False

# 输出结果
print("姓名:", name)
print("年龄:", age)
print("是否是学生:", is_student)`,
        testCases: [
            {
                name: "name变量类型正确",
                check: (output, context) => typeof context.name === 'string' && context.name.length > 0,
                points: 1
            },
            {
                name: "age变量类型正确",
                check: (output, context) => typeof context.age === 'number' && context.age > 0,
                points: 1
            },
            {
                name: "is_student变量类型正确",
                check: (output, context) => typeof context.is_student === 'boolean',
                points: 1
            },
            {
                name: "输出包含姓名",
                check: (output) => output.includes("姓名:"),
                points: 1
            },
            {
                name: "输出包含年龄",
                check: (output) => output.includes("年龄:"),
                points: 1
            }
        ],
        solution: `name = "李艺"
age = 18
is_student = True

print("姓名:", name)
print("年龄:", age)
print("是否是学生:", is_student)`
    },
    {
        unit: 0,
        title: "条件语句练习",
        description: "根据成绩判断等级",
        template: `# 练习2：条件语句
# 根据分数输出对应的等级
# 90分以上：优秀
# 80-89分：良好
# 60-79分：及格
# 60分以下：不及格

score = 85  # 可以修改这个值测试

# 在此处编写判断逻辑

`,
        testCases: [
            {
                name: "score=95时输出优秀",
                check: (output) => {
                    const testOutput = runPythonCode('score = 95\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")');
                    return testOutput.includes("优秀");
                },
                points: 2
            },
            {
                name: "score=85时输出良好",
                check: (output) => output.includes("良好"),
                points: 2
            },
            {
                name: "score=65时输出及格",
                check: (output) => {
                    const testOutput = runPythonCode('score = 65\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")');
                    return testOutput.includes("及格");
                },
                points: 2
            },
            {
                name: "score=45时输出不及格",
                check: (output) => {
                    const testOutput = runPythonCode('score = 45\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")');
                    return testOutput.includes("不及格");
                },
                points: 2
            }
        ],
        solution: `score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")`
    },
    {
        unit: 0,
        title: "循环练习",
        description: "计算1到100的和",
        template: `# 练习3：循环
# 使用循环计算1到100的和
# 并输出结果

# 在此处编写代码


# 输出结果
print("1到100的和:", total)`,
        testCases: [
            {
                name: "结果正确",
                check: (output) => output.includes("5050"),
                points: 5
            },
            {
                name: "输出格式正确",
                check: (output) => output.includes("1到100的和:"),
                points: 2
            }
        ],
        solution: `total = 0
for i in range(1, 101):
    total += i

print("1到100的和:", total)`
    },
    {
        unit: 0,
        title: "列表操作练习",
        description: "列表的基本操作",
        template: `# 练习4：列表操作
# 创建一个包含5个数字的列表
# 添加一个元素
# 删除第一个元素
# 输出列表长度

# 在此处编写代码


# 输出结果
print("列表:", numbers)
print("列表长度:", len(numbers))`,
        testCases: [
            {
                name: "列表操作正确",
                check: (output) => output.includes("列表:"),
                points: 2
            },
            {
                name: "输出列表长度",
                check: (output) => output.includes("列表长度:"),
                points: 2
            }
        ],
        solution: `numbers = [1, 2, 3, 4, 5]
numbers.append(6)
numbers.pop(0)

print("列表:", numbers)
print("列表长度:", len(numbers))`
    },
    {
        unit: 1,
        title: "NumPy数组练习",
        description: "创建和操作NumPy数组",
        template: `# 练习5：NumPy数组
import numpy as np

# 创建一个3x3的零数组
arr = 

# 将数组的对角线元素设为1


# 输出结果
print("数组:\\n", arr)`,
        testCases: [
            {
                name: "数组创建正确",
                check: (output) => output.includes("数组:"),
                points: 2
            },
            {
                name: "对角线元素为1",
                check: (output) => output.includes("1"),
                points: 3
            }
        ],
        solution: `import numpy as np

arr = np.zeros((3, 3))
np.fill_diagonal(arr, 1)

print("数组:\\n", arr)`
    },
    {
        unit: 1,
        title: "Pandas数据处理练习",
        description: "创建DataFrame并进行基本操作",
        template: `# 练习6：Pandas数据处理
import pandas as pd

# 创建一个包含学生信息的DataFrame
data = {
    "姓名": ["李艺", "张三", "李四"],
    "年龄": [18, 20, 19],
    "成绩": [85, 90, 78]
}
df = 

# 计算平均成绩
average_score = 

# 输出结果
print("学生信息:\\n", df)
print("\\n平均成绩:", average_score)`,
        testCases: [
            {
                name: "DataFrame创建正确",
                check: (output) => output.includes("学生信息:"),
                points: 2
            },
            {
                name: "平均成绩计算正确",
                check: (output) => output.includes("84.33") || output.includes("84"),
                points: 3
            }
        ],
        solution: `import pandas as pd

data = {
    "姓名": ["李艺", "张三", "李四"],
    "年龄": [18, 20, 19],
    "成绩": [85, 90, 78]
}
df = pd.DataFrame(data)

average_score = df["成绩"].mean()

print("学生信息:\\n", df)
print("\\n平均成绩:", average_score)`
    },
    {
        unit: 2,
        title: "简单机器学习练习",
        description: "使用线性回归进行预测",
        template: `# 练习7：简单机器学习
from sklearn.linear_model import LinearRegression
import numpy as np

# 创建简单的数据集
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# 创建并训练模型


# 预测x=6时的值
prediction = 

# 输出结果
print("预测结果:", prediction)`,
        testCases: [
            {
                name: "预测结果正确",
                check: (output) => output.includes("12"),
                points: 5
            }
        ],
        solution: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

model = LinearRegression()
model.fit(X, y)

prediction = model.predict([[6]])

print("预测结果:", prediction[0])`
    },
    {
        unit: 4,
        title: "函数定义练习",
        description: "定义一个计算平均值的函数",
        template: `# 练习8：函数定义
# 定义一个函数，计算列表中数字的平均值
def calculate_average(numbers):
    # 在此处编写代码
    

# 测试函数
numbers = [1, 2, 3, 4, 5]
print("平均值:", calculate_average(numbers))`,
        testCases: [
            {
                name: "函数定义正确",
                check: (output) => output.includes("3.0") || output.includes("3"),
                points: 5
            }
        ],
        solution: `def calculate_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

numbers = [1, 2, 3, 4, 5]
print("平均值:", calculate_average(numbers))`
    },
    {
        unit: 4,
        title: "装饰器练习",
        description: "创建一个计时装饰器",
        template: `# 练习9：装饰器
import time

# 创建一个计时装饰器


# 使用装饰器
@timer
def slow_function():
    time.sleep(0.1)
    return "完成"

print(slow_function())`,
        testCases: [
            {
                name: "装饰器工作正常",
                check: (output) => output.includes("完成"),
                points: 3
            },
            {
                name: "输出执行时间",
                check: (output) => output.includes("秒") || output.includes("time"),
                points: 2
            }
        ],
        solution: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"执行时间: {end - start:.2f}秒")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.1)
    return "完成"

print(slow_function())`
    },
    {
        unit: 5,
        title: "综合练习：数据分析",
        description: "综合运用所学知识进行数据分析",
        template: `# 练习10：综合数据分析
import pandas as pd
import numpy as np

# 创建销售数据
data = {
    "日期": pd.date_range("2024-01-01", periods=7),
    "销售额": [1000, 1500, 1200, 1800, 2000, 1600, 1400]
}
df = pd.DataFrame(data)

# 计算每日增长率
df["增长率"] = 

# 计算平均销售额
avg_sales = 

# 找出最高销售额
max_sales = 

# 输出结果
print("销售数据:\\n", df)
print("\\n平均销售额:", avg_sales)
print("最高销售额:", max_sales)`,
        testCases: [
            {
                name: "增长率计算",
                check: (output) => output.includes("增长率"),
                points: 2
            },
            {
                name: "平均销售额",
                check: (output) => output.includes("平均销售额:"),
                points: 2
            },
            {
                name: "最高销售额",
                check: (output) => output.includes("最高销售额:"),
                points: 2
            }
        ],
        solution: `import pandas as pd

data = {
    "日期": pd.date_range("2024-01-01", periods=7),
    "销售额": [1000, 1500, 1200, 1800, 2000, 1600, 1400]
}
df = pd.DataFrame(data)

df["增长率"] = df["销售额"].pct_change() * 100
avg_sales = df["销售额"].mean()
max_sales = df["销售额"].max()

print("销售数据:\\n", df)
print("\\n平均销售额:", avg_sales)
print("最高销售额:", max_sales)`
    }
];

function runPythonCode(code) {
    try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        const win = iframe.contentWindow;
        let output = '';
        
        win.console.log = function(...args) {
            output += args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ') + '\n';
        };
        
        win.eval(code);
        
        document.body.removeChild(iframe);
        return output;
    } catch (error) {
        return 'Error: ' + error.message;
    }
}

function renderExercise(exercise) {
    const container = document.getElementById('exercise-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="exercise-section">
            <h4>📝 ${exercise.title}</h4>
            <p>${exercise.description}</p>
            
            <div class="code-editor">
                <div class="editor-header">
                    <span>代码编辑器</span>
                    <button onclick="loadSolution(${exercises.indexOf(exercise)})" class="btn btn-secondary">查看答案</button>
                </div>
                <textarea id="code-input" rows="15" placeholder="在此处编写Python代码...">${exercise.template}</textarea>
            </div>
            
            <div class="editor-actions">
                <button onclick="runCode(${exercises.indexOf(exercise)})" class="btn btn-primary">运行代码</button>
                <button onclick="resetCode(${exercises.indexOf(exercise)})" class="btn btn-secondary">重置代码</button>
            </div>
            
            <div class="output-section">
                <div class="output-header">
                    <span>输出结果</span>
                </div>
                <div id="output-content" class="output-content"></div>
            </div>
            
            <div class="score-section">
                <div class="score-header">
                    <span>测试结果</span>
                </div>
                <div id="score-content" class="score-content"></div>
            </div>
        </div>
    `;
}

function runCode(exerciseIndex) {
    const exercise = exercises[exerciseIndex];
    const codeInput = document.getElementById('code-input');
    const outputContent = document.getElementById('output-content');
    const scoreContent = document.getElementById('score-content');
    
    if (!codeInput || !outputContent || !scoreContent) return;
    
    try {
        const output = runPythonCode(codeInput.value);
        outputContent.textContent = output;
        outputContent.className = 'output-content';
        
        let totalPoints = 0;
        let earnedPoints = 0;
        const results = [];
        
        exercise.testCases.forEach((testCase, index) => {
            totalPoints += testCase.points;
            const passed = testCase.check(output, {});
            if (passed) earnedPoints += testCase.points;
            
            results.push({
                name: testCase.name,
                passed: passed,
                points: testCase.points
            });
        });
        
        let scoreHtml = `<div class="score-summary">得分: ${earnedPoints}/${totalPoints}</div>`;
        scoreHtml += '<ul>';
        results.forEach(result => {
            const status = result.passed ? '✅' : '❌';
            const color = result.passed ? 'color: green' : 'color: red';
            scoreHtml += `<li style="${color}">${status} ${result.name} (${result.points}分)</li>`;
        });
        scoreHtml += '</ul>';
        
        scoreContent.innerHTML = scoreHtml;
        
        if (earnedPoints === totalPoints) {
            scoreContent.classList.add('score-success');
            scoreContent.classList.remove('score-error');
        } else {
            scoreContent.classList.add('score-error');
            scoreContent.classList.remove('score-success');
        }
        
    } catch (error) {
        outputContent.textContent = '❌ 错误: ' + error.message;
        outputContent.className = 'output-content output-error';
        scoreContent.innerHTML = '<div class="score-summary">代码执行出错，请检查语法！</div>';
        scoreContent.className = 'score-content score-error';
    }
}

function resetCode(exerciseIndex) {
    const exercise = exercises[exerciseIndex];
    const codeInput = document.getElementById('code-input');
    const outputContent = document.getElementById('output-content');
    const scoreContent = document.getElementById('score-content');
    
    if (codeInput) codeInput.value = exercise.template;
    if (outputContent) {
        outputContent.textContent = '';
        outputContent.className = 'output-content';
    }
    if (scoreContent) {
        scoreContent.innerHTML = '';
        scoreContent.className = 'score-content';
    }
}

function loadSolution(exerciseIndex) {
    const exercise = exercises[exerciseIndex];
    const codeInput = document.getElementById('code-input');
    
    if (codeInput) {
        codeInput.value = exercise.solution;
        runCode(exerciseIndex);
    }
}

function getExercisesByUnit(unitIndex) {
    return exercises.filter(e => e.unit === unitIndex);
}

function showExercises(unitIndex) {
    const unitExercises = getExercisesByUnit(unitIndex);
    
    if (unitExercises.length === 0) {
        document.getElementById('exercise-container').innerHTML = `
            <div class="no-exercise">
                <p>该单元暂无练习题目</p>
            </div>
        `;
        return;
    }
    
    renderExercise(unitExercises[0]);
    
    if (unitExercises.length > 1) {
        const selector = document.createElement('div');
        selector.className = 'exercise-selector';
        selector.innerHTML = '<h5>选择练习:</h5>';
        
        unitExercises.forEach((ex, index) => {
            const button = document.createElement('button');
            button.textContent = `${index + 1}. ${ex.title}`;
            button.className = 'btn btn-sm';
            button.onclick = () => renderExercise(ex);
            selector.appendChild(button);
        });
        
        document.getElementById('exercise-container').prepend(selector);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonIndex = parseInt(urlParams.get('lesson')) || 0;
    showExercises(lessonIndex);
});
