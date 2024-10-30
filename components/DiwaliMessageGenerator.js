import { useState } from 'react';
import { Send, Sparkles, Layout, Share2, Mail, MessageCircle, Heart } from 'lucide-react';

const DiwaliMessageGenerator = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    recipientName: '',
    customMessage: '',
    messageStyle: '',
    memoryPrompt: '',
    selectedTemplate: null
  });
  const [showPreview, setShowPreview] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const messageStyles = [
    { id: 'friendly', label: 'Friendly' },
    { id: 'professional', label: 'Professional' },
    { id: 'elderly', label: 'Elderly' },
    { id: 'romantic', label: 'Romantic' }
  ];

  const templates = [
    { id: 1, name: 'Traditional Diya' },
    { id: 2, name: 'Modern Rangoli' },
    { id: 3, name: 'Festive Lanterns' }
  ];

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/95 border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-orange-800 placeholder-orange-300";

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const shareActions = {
    message: () => {
      const text = encodeURIComponent('Check out my Diwali greeting!');
      window.open(`sms:?body=${text}`, '_blank');
    },
    email: () => {
      const subject = encodeURIComponent('Diwali Greetings');
      const body = encodeURIComponent('Check out my Diwali greeting!');
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    },
    copy: () => {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-yellow-500">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-orange-300/20 rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            ✨ Iss Diwali AI ka sath ✨
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Create personalized Diwali wishes with a touch of AI magic
          </p>
          <a 
            href="https://x.com/moghalsaifa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/75 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
          >
            Built by Moghal Saif Aliullah 
            <span className="text-xs">↗</span>
          </a>
        </div>

        {!showPreview ? (
          <div className="space-y-12">
            {/* Names Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-white mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.senderName}
                  onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                  className={inputClasses}
                  placeholder="Enter your name"
                />
              </div>
              <div className="group">
                <label className="block text-white mb-2 font-medium">Recipient's Name</label>
                <input
                  type="text"
                  value={formData.recipientName}
                  onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                  className={inputClasses}
                  placeholder="Enter recipient's name"
                />
              </div>
            </div>

            {/* Message Style Selection */}
            <div className="space-y-4">
              <label className="block text-white mb-2 font-medium">Message Style</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {messageStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setFormData({...formData, messageStyle: style.id})}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      formData.messageStyle === style.id
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg scale-105'
                        : 'bg-white/95 text-orange-800 hover:bg-white'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>

              {/* Memory Prompt */}
              <div className="mt-6">
                <label className="block text-white mb-2 font-medium flex items-center gap-2">
                  Express a moment that lights up you both 🪔
                </label>
                <input
                  type="text"
                  value={formData.memoryPrompt}
                  onChange={(e) => setFormData({...formData, memoryPrompt: e.target.value})}
                  className={inputClasses}
                  placeholder="Share a special memory or moment..."
                />
              </div>

              {/* Message Input */}
              <div className="mt-6">
                <label className="block text-white mb-2 font-medium">Custom Message</label>
                <textarea
                  value={formData.customMessage}
                  onChange={(e) => setFormData({...formData, customMessage: e.target.value})}
                  className={`${inputClasses} h-32`}
                  placeholder="Write your heartfelt Diwali message..."
                />
                <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                  <Sparkles className="w-5 h-5" />
                  Generate AI Message
                </button>
              </div>
            </div>

            {/* Template Selection */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Layout className="w-6 h-6" />
                Choose Your Template
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setFormData({...formData, selectedTemplate: template.id})}
                    className={`group p-4 rounded-xl transition-all ${
                      formData.selectedTemplate === template.id
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 scale-105 shadow-lg border-2 border-white'
                        : 'bg-white/20 border-white/30 hover:bg-white/25 backdrop-blur-sm'
                    }`}
                  >
                    <div className={`h-40 rounded-lg transition-all mb-3 ${
                      formData.selectedTemplate === template.id
                        ? 'bg-white/20'
                        : 'bg-white/10 group-hover:bg-white/20'
                    }`}></div>
                    <p className="text-white font-medium">{template.name}</p>
                  </button>
                ))}
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full mt-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md font-medium"
              >
                <Send className="w-5 h-5" />
                Preview & Send
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex justify-center mb-6 space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full animate-pulse" />
              <div className="w-8 h-8 bg-orange-500 rounded-full animate-pulse" />
              <div className="w-8 h-8 bg-pink-500 rounded-full animate-pulse" />
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                Happy Diwali, {formData.recipientName}!
              </h2>
              <p className="text-gray-700 mb-6">
                {formData.customMessage || "May the festival of lights bring you joy, prosperity, and happiness..."}
              </p>
              <p className="text-orange-600 font-semibold">
                Warm wishes,<br/>
                {formData.senderName}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowPreview(false)}
                className="px-6 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200"
              >
                Edit
              </button>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 relative"
              >
                <Share2 className="w-5 h-5" />
                {showShareMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-48">
                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={shareActions.message}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Message</span>
                      </button>
                      <button
                        onClick={shareActions.email}
                        className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 px-3 py-2 rounded-lg hover:bg-orange-50"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </button>
                      <button
                        onClick={shareActions.copy}
                        className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 px-3 py-2 rounded-lg hover:bg-pink-50"
                      >
                        <Heart className="w-5 h-5" />
                        <span>Copy Link</span>
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiwaliMessageGenerator;