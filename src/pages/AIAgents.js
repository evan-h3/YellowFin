import React, { useState } from "react";
import axios from 'axios';

function AIAgents() {
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: '你好！我是 JM Foundation 的 AI 助手。我可以帮你解答关于教育和申请的问题。'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const callZhipuAI = async (userMessage) => {
        try {
            const response = await axios.post(
                '/api/paas/v4/chat/completions',
                {
                    model: "glm-4",
                    messages: [
                        {
                            role: "system",
                            content: "你是 JM Foundation 的 AI 助手，专门帮助学生解答关于教育和申请方面的问题。请用专业、友好的语气回答。"
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 1000,
                    stream: false
                },
                {
                    headers: {
                        'Authorization': `Bearer 63e4e3224c76417e80c00f64957541a5.UACSyRDMZOxqzreU`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error calling Zhipu AI:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading) return;

        setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
        setIsLoading(true);

        try {
            const aiResponse = await callZhipuAI(inputMessage);
            setMessages(prev => [...prev, { type: 'bot', content: aiResponse }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                type: 'bot',
                content: '抱歉，我现在遇到了一些问题。请稍后再试。'
            }]);
            console.error('Error details:', error);
        } finally {
            setIsLoading(false);
            setInputMessage('');
        }
    };

    return (
        <section id="ai-agents" className="section">
            <h2>AI Agents Chat</h2>
            <div className="chat-container">
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                            <div className="message-content">
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message bot">
                            <div className="message-content loading">
                                AI 正在思考...
                            </div>
                        </div>
                    )}
                </div>
                <form className="chat-input-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="输入你的问题..."
                        className="chat-input"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="chat-submit"
                        disabled={isLoading}
                    >
                        发送
                    </button>
                </form>
            </div>
        </section>
    );
}

export default AIAgents; 