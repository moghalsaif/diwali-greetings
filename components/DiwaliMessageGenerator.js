import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const DiwaliMessageGenerator = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    recipientName: '',
    messageStyle: '',
    memoryPrompt: ''
  });

  const messageStyles = [
    { id: 'friendly', label: 'Friendly & Casual' },
    { id: 'professional', label: 'Professional & Formal' },
    { id: 'elderly', label: 'Respectful & Traditional' },
    { id: 'romantic', label: 'Romantic & Sweet' }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            ✨ Iss Diwali AI ka sath ✨
          </h1>
          <p className="text-white text-lg mb-2">
            Create personalized Diwali wishes with a touch of AI magic
          </p>
          <a 
            href="https://x.com/moghalsaifa" 
            className="text-white/75 hover:text-white"
          >
            Built by Moghal Saif Aliullah ↗
          </a>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          {/* Names */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-white mb-2">Your Name *</label>
              <input
                type="text"
                value={formData.senderName}
                onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Recipient's Name *</label>
              <input
                type="text"
                value={formData.recipientName}
                onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white"
                placeholder="Enter recipient's name"
              />
            </div>
          </div>

          {/* Message Style */}
          <div className="mb-8">
            <label className="block text-white mb-2">Choose Message Style *</label>
            <div className="grid grid-cols-2 gap-2">
              {messageStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setFormData({...formData, messageStyle: style.id})}
                  className={`p-2 rounded-lg transition-all ${
                    formData.messageStyle === style.id
                      ? 'bg-white text-orange-500'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* Memory Prompt */}
          <div className="mb-8">
            <label className="block text-white mb-2">Add a Special Memory (Optional) 🪔</label>
            <input
              type="text"
              value={formData.memoryPrompt}
              onChange={(e) => setFormData({...formData, memoryPrompt: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white"
              placeholder="Share a special memory..."
            />
          </div>

          {/* Generate Button */}
          <button className="w-full bg-white text-orange-500 py-3 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Generate Diwali Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiwaliMessageGenerator;