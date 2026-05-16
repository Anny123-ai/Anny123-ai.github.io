// 选择题练习渲染和批改功能

function renderQuiz(quizIndex) {
    const quiz = dataQuizzes[quizIndex];
    if (!quiz) return;
    
    const container = document.getElementById('exercise-container');
    if (!container) return;
    
    let questionsHTML = '';
    
    quiz.questions.forEach((q, qIndex) => {
        questionsHTML += `
            <div class="quiz-question" data-question="${qIndex}">
                <div class="question-text">${q.question}</div>
                <div class="options-list">
                    ${q.options.map((opt, optIndex) => `
                        <label class="option-item">
                            <input type="radio" name="q${qIndex}" value="${String.fromCharCode(65 + optIndex)}" class="option-radio">
                            <span class="option-label">${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = `
        <div class="exercise-section">
            <h4>📝 ${quiz.title}</h4>
            <p class="exercise-intro">💡 检验一下你的学习成果吧！认真作答，然后点击确定完成按钮提交答案~</p>
            
            <div class="quiz-container">
                ${questionsHTML}
            </div>
            
            <div class="quiz-actions">
                <button onclick="submitQuiz(${quizIndex})" class="btn btn-primary btn-lg">
                    ✅ 确定完成
                </button>
            </div>
            
            <div id="quiz-result" class="quiz-result hidden"></div>
        </div>
    `;
    
    // 添加样式
    addQuizStyles();
}

function submitQuiz(quizIndex) {
    const quiz = dataQuizzes[quizIndex];
    if (!quiz) return;
    
    let score = 0;
    let totalQuestions = quiz.questions.length;
    let resultsHTML = '';
    
    quiz.questions.forEach((q, qIndex) => {
        const selectedInput = document.querySelector(`input[name="q${qIndex}"]:checked`);
        const selectedAnswer = selectedInput ? selectedInput.value : null;
        const isCorrect = selectedAnswer === q.answer;
        
        if (isCorrect) {
            score++;
        }
        
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const statusIcon = isCorrect ? '✅' : '❌';
        const statusText = isCorrect ? '回答正确！' : '回答错误';
        
        resultsHTML += `
            <div class="result-item ${statusClass}">
                <div class="result-header">
                    <span class="result-icon">${statusIcon}</span>
                    <span class="result-status">${statusText}</span>
                    <span class="result-answer">正确答案：${q.answer}</span>
                </div>
                <div class="result-question">${q.question}</div>
                <div class="result-explanation">
                    <strong>📖 解析：</strong>${q.explanation}
                </div>
                ${!isCorrect && selectedAnswer ? `<div class="your-answer">你的答案：${selectedAnswer}</div>` : ''}
            </div>
        `;
    });
    
    const percentage = Math.round((score / totalQuestions) * 100);
    let gradeText = '';
    let gradeEmoji = '';
    
    if (percentage >= 90) {
        gradeText = '优秀！';
        gradeEmoji = '🌟';
    } else if (percentage >= 70) {
        gradeText = '良好！';
        gradeEmoji = '👍';
    } else if (percentage >= 60) {
        gradeText = '及格！';
        gradeEmoji = '💪';
    } else {
        gradeText = '继续加油！';
        gradeEmoji = '📚';
    }
    
    const resultHTML = `
        <div class="result-summary ${percentage >= 60 ? 'pass' : 'fail'}">
            <div class="result-score">
                ${gradeEmoji} ${gradeText} ${gradeEmoji}
            </div>
            <div class="score-detail">
                得分：${score} / ${totalQuestions}（${percentage}%）
            </div>
            <div class="score-bar">
                <div class="score-bar-fill" style="width: ${percentage}%"></div>
            </div>
        </div>
        <div class="result-details">
            ${resultsHTML}
        </div>
        <div class="result-actions">
            <button onclick="resetQuiz(${quizIndex})" class="btn btn-secondary">
                🔄 重新作答
            </button>
        </div>
    `;
    
    const resultContainer = document.getElementById('quiz-result');
    resultContainer.innerHTML = resultHTML;
    resultContainer.classList.remove('hidden');
    
    // 滚动到结果区域
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetQuiz(quizIndex) {
    renderQuiz(quizIndex);
}

function addQuizStyles() {
    if (document.getElementById('quiz-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'quiz-styles';
    styles.textContent = `
        .quiz-container {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin: 20px 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        
        .quiz-question {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e9ecef;
        }
        
        .quiz-question:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        .question-text {
            font-size: 1.1rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 15px;
            line-height: 1.6;
        }
        
        .options-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .option-item {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
        }
        
        .option-item:hover {
            background: #e6fffa;
            border-color: #38ef7d;
            transform: translateX(5px);
        }
        
        .option-item.selected {
            background: #e6fffa;
            border-color: #38ef7d;
            box-shadow: 0 2px 8px rgba(56, 239, 125, 0.3);
        }
        
        .option-radio {
            width: 20px;
            height: 20px;
            margin-right: 15px;
            cursor: pointer;
            accent-color: #38ef7d;
        }
        
        .option-label {
            flex: 1;
            color: #555;
            line-height: 1.5;
        }
        
        .quiz-actions {
            text-align: center;
            margin-top: 30px;
        }
        
        .btn-lg {
            padding: 15px 50px;
            font-size: 1.2rem;
            border-radius: 30px;
        }
        
        .quiz-result {
            margin-top: 40px;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .result-summary {
            background: white;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .result-summary.pass {
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            color: white;
        }
        
        .result-summary.fail {
            background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
            color: white;
        }
        
        .result-score {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 15px;
        }
        
        .score-detail {
            font-size: 1.3rem;
            margin-bottom: 20px;
        }
        
        .score-bar {
            width: 100%;
            height: 15px;
            background: rgba(255,255,255,0.3);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .score-bar-fill {
            height: 100%;
            background: white;
            border-radius: 10px;
            transition: width 1s ease;
        }
        
        .result-details {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .result-item {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        
        .result-item.correct {
            border-left: 5px solid #38ef7d;
        }
        
        .result-item.incorrect {
            border-left: 5px solid #f5576c;
        }
        
        .result-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .result-icon {
            font-size: 1.5rem;
        }
        
        .result-status {
            font-weight: 700;
            font-size: 1.1rem;
        }
        
        .result-answer {
            background: #e6fffa;
            color: #11998e;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 600;
            margin-left: auto;
        }
        
        .result-question {
            font-size: 1rem;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .result-explanation {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            color: #555;
            line-height: 1.6;
            font-size: 0.95rem;
        }
        
        .your-answer {
            margin-top: 10px;
            color: #f5576c;
            font-weight: 600;
        }
        
        .result-actions {
            text-align: center;
            margin-top: 30px;
        }
        
        .hidden {
            display: none;
        }
    `;
    document.head.appendChild(styles);
}

// 为选项添加点击高亮效果
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        const optionItem = e.target.closest('.option-item');
        if (optionItem) {
            const questionDiv = optionItem.closest('.quiz-question');
            const questionIndex = questionDiv.dataset.question;
            
            // 移除同题目的其他选中状态
            questionDiv.querySelectorAll('.option-item').forEach(item => {
                item.classList.remove('selected');
            });
            
            // 添加当前选中状态
            optionItem.classList.add('selected');
            
            // 选中radio按钮
            const radio = optionItem.querySelector('.option-radio');
            if (radio) {
                radio.checked = true;
            }
        }
    });
});
