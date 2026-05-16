const dataExercises = [
    {
        title: "练习：计算每日平均开销",
        description: "记录了小明一周的开销，让我们来计算一下平均每天花多少钱。",
        template: `# 小明一周的开销（单位：元）
expenses = [85, 120, 65, 90, 110, 75, 130]

# TODO：计算平均每天的开销
# 提示：先用 sum() 计算总和，再用 len() 计算天数
average = 

print(f"小明平均每天花费：{average:.2f} 元")`,
        solution: `# 小明一周的开销（单位：元）
expenses = [85, 120, 65, 90, 110, 75, 130]

# 计算平均每天的开销
average = sum(expenses) / len(expenses)

print(f"小明平均每天花费：{average:.2f} 元")`
    },
    {
        title: "练习：找出销售额最高的产品",
        description: "某商店有4种产品的销售数据，我们来找出哪个产品卖得最好。",
        template: `# 产品销量数据
products = ['产品A', '产品B', '产品C', '产品D']
sales = [150, 230, 180, 210]

# TODO：找出销量最高的产品
# 提示：用 max() 找最大值，用 index() 找位置
max_sale = 
max_index = 
best_product = 

print(f"销量最高的产品是：{best_product}")
print(f"销量为：{max_sale} 件")`,
        solution: `# 产品销量数据
products = ['产品A', '产品B', '产品C', '产品D']
sales = [150, 230, 180, 210]

# 找出销量最高的产品
max_sale = max(sales)
max_index = sales.index(max_sale)
best_product = products[max_index]

print(f"销量最高的产品是：{best_product}")
print(f"销量为：{max_sale} 件")`
    },
    {
        title: "练习：计算考试成绩统计",
        description: "某班级的考试成绩，我们来计算一下平均分、最高分和最低分。",
        template: `# 考试成绩
scores = [85, 92, 78, 88, 95, 72, 80, 90, 85, 75]

# TODO：计算统计数据
average_score = 
max_score = 
min_score = 
pass_count = 0

# TODO：统计及格人数（>=60分）
for score in scores:
    if score >= 60:
        pass_count += 1

print(f"平均分：{average_score:.2f}")
print(f"最高分：{max_score}")
print(f"最低分：{min_score}")
print(f"及格人数：{pass_count}")`,
        solution: `# 考试成绩
scores = [85, 92, 78, 88, 95, 72, 80, 90, 85, 75]

# 计算统计数据
average_score = sum(scores) / len(scores)
max_score = max(scores)
min_score = min(scores)
pass_count = 0

# 统计及格人数（>=60分）
for score in scores:
    if score >= 60:
        pass_count += 1

print(f"平均分：{average_score:.2f}")
print(f"最高分：{max_score}")
print(f"最低分：{min_score}")
print(f"及格人数：{pass_count}")`
    },
    {
        title: "练习：数据分组统计",
        description: "模拟销售数据，按产品类别分组统计销售额。",
        template: `# 模拟销售数据：产品名称、类别、销售额
data = [
    ['苹果', '水果', 120],
    ['香蕉', '水果', 90],
    ['橙子', '水果', 85],
    ['青菜', '蔬菜', 70],
    ['萝卜', '蔬菜', 65],
    ['牛肉', '肉类', 200],
    ['猪肉', '肉类', 180],
    ['鸡肉', '肉类', 150]
]

# TODO：按类别统计销售额
category_sales = {}

for row in data:
    name, category, amount = row
    if category in category_sales:
        category_sales[category] += amount
    else:
        category_sales[category] = amount

# 打印结果
for category, total in category_sales.items():
    print(f"{category}总销售额：{total} 元")`,
        solution: `# 模拟销售数据：产品名称、类别、销售额
data = [
    ['苹果', '水果', 120],
    ['香蕉', '水果', 90],
    ['橙子', '水果', 85],
    ['青菜', '蔬菜', 70],
    ['萝卜', '蔬菜', 65],
    ['牛肉', '肉类', 200],
    ['猪肉', '肉类', 180],
    ['鸡肉', '肉类', 150]
]

# 按类别统计销售额
category_sales = {}

for row in data:
    name, category, amount = row
    if category in category_sales:
        category_sales[category] += amount
    else:
        category_sales[category] = amount

# 打印结果
for category, total in category_sales.items():
    print(f"{category}总销售额：{total} 元")`
    },
    {
        title: "练习：简单的数据可视化",
        description: "用列表模拟数据，并用文字画一个简单的柱状图。",
        template: `# 月度销售数据
months = ['1月', '2月', '3月', '4月', '5月']
sales = [120, 180, 150, 220, 250]

# TODO：用文字画柱状图
print("月度销售柱状图")
print("-" * 50)

for i in range(len(months)):
    month = months[i]
    sale = sales[i]
    # 用 # 代表销售额，每个 # 代表 10 元
    bars = '#' * (sale // 10)
    print(f"{month} | {bars} ({sale})")

print("-" * 50)`,
        solution: `# 月度销售数据
months = ['1月', '2月', '3月', '4月', '5月']
sales = [120, 180, 150, 220, 250]

# 用文字画柱状图
print("月度销售柱状图")
print("-" * 50)

for i in range(len(months)):
    month = months[i]
    sale = sales[i]
    # 用 # 代表销售额，每个 # 代表 10 元
    bars = '#' * (sale // 10)
    print(f"{month} | {bars} ({sale})")

print("-" * 50)`
    }
];

function renderDataExercise(exerciseIndex) {
    const container = document.getElementById('exercise-container');
    if (!container) return;
    
    if (exerciseIndex < 0 || exerciseIndex >= dataExercises.length) {
        // 不是每个单元都有练习
        container.innerHTML = '';
        return;
    }
    
    const exercise = dataExercises[exerciseIndex] || dataExercises[0];
    
    container.innerHTML = `
        <div class="exercise-section">
            <h4>📝 ${exercise.title}</h4>
            <p class="exercise-intro">💡 动手实践是学习数据分析的最好方式！完成下面的练习吧~</p>
            <p>${exercise.description}</p>
            
            <div class="code-editor">
                <div class="editor-header">
                    <span>代码练习区</span>
                    <button onclick="loadDataSolution(${exerciseIndex})" class="btn btn-secondary">查看答案</button>
                </div>
                <textarea id="data-code-input" rows="15" placeholder="在此处编写代码...">${exercise.template}</textarea>
            </div>
            
            <div class="editor-actions">
                <button onclick="runDataCode()" class="btn btn-primary">运行代码</button>
                <button onclick="resetDataCode(${exerciseIndex})" class="btn btn-secondary">重置</button>
            </div>
            
            <div class="output-section">
                <div class="output-header">
                    <span>运行结果</span>
                </div>
                <div id="data-output-content" class="output-content"></div>
            </div>
        </div>
    `;
}

function loadDataSolution(exerciseIndex) {
    const exercise = dataExercises[exerciseIndex];
    document.getElementById('data-code-input').value = exercise.solution;
}

function resetDataCode(exerciseIndex) {
    const exercise = dataExercises[exerciseIndex];
    document.getElementById('data-code-input').value = exercise.template;
    document.getElementById('data-output-content').innerHTML = '';
}

function runDataCode() {
    const code = document.getElementById('data-code-input').value;
    const output = document.getElementById('data-output-content');
    
    try {
        // 简单的Python模拟器
        let result = '';
        const lines = code.split('\\n');
        let variables = {};
        let inLoop = false;
        let loopVar = '';
        let loopValues = [];
        let loopBody = [];
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            
            if (line === '' || line.startsWith('#')) continue;
            
            if (line.startsWith('for') && line.includes(' in ')) {
                inLoop = true;
                const parts = line.split(' in ');
                loopVar = parts[0].replace('for ', '').trim();
                const listExpr = parts[1].replace(':', '').trim();
                loopValues = evaluateList(listExpr, variables);
                loopBody = [];
                continue;
            }
            
            if (inLoop && line.startsWith('    ')) {
                loopBody.push(line.trim());
                continue;
            }
            
            if (inLoop && !line.startsWith('    ')) {
                inLoop = false;
                // 执行循环
                for (const val of loopValues) {
                    variables[loopVar] = val;
                    for (const bodyLine of loopBody) {
                        result += executeLine(bodyLine, variables) || '';
                    }
                }
            }
            
            if (!inLoop) {
                result += executeLine(line, variables) || '';
            }
        }
        
        output.innerHTML = '<pre class="text-white">' + (result || '代码运行完成！') + '</pre>';
    } catch (e) {
        output.innerHTML = '<pre class="text-red-300">错误：' + e.message + '</pre>';
    }
}

function evaluateList(expr, variables) {
    if (expr in variables) {
        return variables[expr];
    }
    // 简单的列表解析
    if (expr.startsWith('[') && expr.endsWith(']')) {
        const content = expr.slice(1, -1);
        return content.split(',').map(item => {
            item = item.trim();
            if (item.startsWith("'") || item.startsWith('"')) {
                return item.slice(1, -1);
            }
            return parseFloat(item);
        });
    }
    return [];
}

function executeLine(line, variables) {
    if (line.startsWith('print(')) {
        const expr = line.slice(6, -1);
        return evaluateExpression(expr, variables) + '\\n';
    }
    
    if (line.includes('=')) {
        const parts = line.split('=');
        const varName = parts[0].trim();
        const expr = parts[1].trim();
        variables[varName] = evaluateExpression(expr, variables);
        return null;
    }
    
    if (line.startsWith('#')) {
        return null;
    }
    
    return null;
}

function evaluateExpression(expr, variables) {
    // 简单的表达式求值
    expr = expr.trim();
    
    if (expr in variables) {
        return variables[expr];
    }
    
    if (expr.startsWith('"') || expr.startsWith("'")) {
        return expr.slice(1, -1);
    }
    
    if (expr.startsWith('[') && expr.endsWith(']')) {
        const content = expr.slice(1, -1);
        return content.split(',').map(item => {
            item = item.trim();
            if (item.startsWith("'") || item.startsWith('"')) {
                return item.slice(1, -1);
            }
            return parseFloat(item);
        });
    }
    
    if (expr.startsWith('sum(') && expr.endsWith(')')) {
        const listExpr = expr.slice(4, -1);
        const listVal = evaluateExpression(listExpr, variables);
        if (Array.isArray(listVal)) {
            return listVal.reduce((a, b) => a + b, 0);
        }
    }
    
    if (expr.startsWith('len(') && expr.endsWith(')')) {
        const listExpr = expr.slice(4, -1);
        const listVal = evaluateExpression(listExpr, variables);
        if (Array.isArray(listVal)) {
            return listVal.length;
        }
    }
    
    if (expr.startsWith('max(') && expr.endsWith(')')) {
        const listExpr = expr.slice(4, -1);
        const listVal = evaluateExpression(listExpr, variables);
        if (Array.isArray(listVal)) {
            return Math.max(...listVal);
        }
    }
    
    if (expr.startsWith('min(') && expr.endsWith(')')) {
        const listExpr = expr.slice(4, -1);
        const listVal = evaluateExpression(listExpr, variables);
        if (Array.isArray(listVal)) {
            return Math.min(...listVal);
        }
    }
    
    if (expr.includes(' + ')) {
        const parts = expr.split(' + ');
        let result = evaluateExpression(parts[0], variables);
        for (let i = 1; i < parts.length; i++) {
            result += evaluateExpression(parts[i], variables);
        }
        return result;
    }
    
    if (expr.includes(' / ')) {
        const parts = expr.split(' / ');
        let result = evaluateExpression(parts[0], variables);
        for (let i = 1; i < parts.length; i++) {
            result /= evaluateExpression(parts[i], variables);
        }
        return result;
    }
    
    if (expr.includes(' // ')) {
        const parts = expr.split(' // ');
        let result = evaluateExpression(parts[0], variables);
        for (let i = 1; i < parts.length; i++) {
            result = Math.floor(result / evaluateExpression(parts[i], variables));
        }
        return result;
    }
    
    if (!isNaN(expr)) {
        return parseFloat(expr);
    }
    
    return expr;
}
