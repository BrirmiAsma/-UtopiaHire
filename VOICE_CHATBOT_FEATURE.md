# Voice Chatbot Feature - Documentation

## ✅ Feature Implemented

A floating AI voice assistant chatbot that allows users to have real-time voice conversations on the dashboard.

---

## 🎯 Overview

The voice chatbot provides an interactive voice interface where users can:
- Click a floating button to open the voice assistant
- Speak to the AI chatbot using their microphone
- See real-time voice visualization
- View conversation history
- Receive AI responses (backend integration pending)

---

## 📦 Components Created

### 1. **ChatbotButton** (`components/chatbot/ChatbotButton.tsx`)
- Floating button in bottom-right corner
- Animated pulse effect
- Opens/closes voice chat interface
- Visible on all dashboard pages

### 2. **VoiceChatInterface** (`components/chatbot/VoiceChatInterface.tsx`)
- Full voice chat modal interface
- Message display area
- Voice visualizer with waveform animation
- Microphone controls
- Real-time listening indicator

---

## 🎨 Design Features

### Floating Button:
- **Position**: Fixed bottom-right corner (bottom-6 right-6)
- **Size**: 64x64 pixels (w-16 h-16)
- **Color**: Gradient from Sahara Gold to Atlas Teal
- **Animation**: 
  - Pulse effect (ping animation)
  - Scale on hover (110%)
  - Shadow elevation
- **Icon**: MessageCircle (chat bubble)

### Voice Interface Modal:
- **Size**: Max-width 2xl (672px), Height 600px
- **Layout**: Header, Messages, Visualizer, Controls, Footer
- **Colors**: UtopiaHire brand colors
- **Animations**: FadeIn and SlideUp on open

---

## 🎭 Interface Sections

### 1. Header
```
┌────────────────────────────────────┐
│ [AI Icon] AI Voice Assistant    [X]│
│          Ready to help             │
└────────────────────────────────────┘
```
- AI assistant icon with gradient
- Title and status
- Close button

### 2. Messages Area
```
┌────────────────────────────────────┐
│ [Bot] Hello! I'm your AI...        │
│                                    │
│              [User] Hello     [👤] │
│                                    │
│ [Bot] How can I help?              │
└────────────────────────────────────┘
```
- Scrollable message history
- Bot messages (left, gray background)
- User messages (right, blue gradient)
- Avatar icons for each message
- Timestamps

### 3. Voice Visualizer
```
┌────────────────────────────────────┐
│  | || ||| || | ||| || | || |       │
│  (Animated waveform bars)          │
└────────────────────────────────────┘
```
- 20 animated bars
- Height responds to "audio level"
- Gradient colors (Teal to Gold)
- Only visible when listening

### 4. Microphone Control
```
┌────────────────────────────────────┐
│           [🎤]                     │
│   Click to start speaking          │
└────────────────────────────────────┘
```
- Large circular button (80x80px)
- Mic icon (idle state)
- MicOff icon (listening state)
- Color changes: Green → Red when active
- Pulse animation when listening

### 5. Footer Info
```
┌────────────────────────────────────┐
│ ✨ AI-Powered | 🔊 Voice | 🤖 Real-time │
└────────────────────────────────────┘
```
- Feature badges
- Small text with icons

---

## 🎬 User Interactions

### Opening the Chatbot:
1. User sees floating button in bottom-right
2. Button has pulsing animation
3. User clicks button
4. Interface slides up with fade-in animation

### Voice Interaction:
1. User clicks microphone button
2. Button turns red and pulses
3. Waveform visualizer appears and animates
4. Status changes to "Listening..."
5. User speaks their message
6. User clicks mic again to stop
7. User message appears in chat
8. Bot "thinking" delay (1.5 seconds)
9. Bot response appears in chat

### Closing the Chatbot:
1. User clicks X button in header
2. Interface fades out
3. Floating button reappears

---

## 💬 Message Structure

```typescript
interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
```

### Initial Message:
```javascript
{
  id: '1',
  type: 'bot',
  text: 'Hello! I\'m your AI career assistant. How can I help you today? You can speak to me by clicking the microphone button.',
  timestamp: new Date(),
}
```

---

## 🎨 Visual Design Details

### Colors Used:
- **Button Gradient**: `from-[#D4A574] to-[#2C7A7B]`
- **User Messages**: `from-[#3182CE] to-[#805AD5]` (Blue-Purple)
- **Bot Messages**: `bg-[#F7FAFC]` (Light gray)
- **Bot Avatar**: Sahara Gold → Atlas Teal gradient
- **User Avatar**: Nile Blue → Acacia Purple gradient
- **Active Mic**: `from-[#F56565] to-[#E53E3E]` (Red)

### Icons:
- MessageCircle (floating button)
- Sparkles (AI assistant header)
- Bot (bot avatar)
- User (user avatar)
- Mic (idle state)
- MicOff (listening state)
- Volume2 (audio indicator)
- X (close button)

---

## 🔊 Voice Visualizer

### Animation:
- **Bars**: 20 vertical bars
- **Width**: 4px (w-1)
- **Color**: Gradient from Teal to Gold
- **Height**: Random 20-100% (simulated audio level)
- **Opacity**: 0.3 to 1.0 (random)
- **Update**: Every 100ms when listening

### Code Simulation:
```javascript
useEffect(() => {
  if (isListening) {
    const interval = setInterval(() => {
      setAudioLevel(Math.random() * 100);
    }, 100);
    return () => clearInterval(interval);
  }
}, [isListening]);
```

---

## 📱 Responsive Design

### Desktop (> 1024px):
- Floating button bottom-right
- Modal centered on screen
- Full-width interface (max 672px)

### Tablet (640px - 1024px):
- Floating button visible
- Modal responsive width
- Touch-optimized buttons

### Mobile (< 640px):
- Floating button positioned safely
- Full-screen modal (with padding)
- Larger touch targets

---

## ♿ Accessibility Features

- ✅ ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Semantic HTML
- ✅ Alt text for icons
- ✅ Clear visual states
- ✅ High contrast colors

---

## 🔌 Integration Points (For Backend)

### 1. Microphone API
```javascript
// Web Speech API or similar
navigator.mediaDevices.getUserMedia({ audio: true })
```

### 2. Speech-to-Text
```javascript
// Convert audio to text
// Integration point: When user stops speaking
const transcription = await speechToText(audioBlob);
```

### 3. AI Processing
```javascript
// Send to AI backend
POST /api/chat/voice
Body: {
  message: transcription,
  conversationId: string,
  userId: string
}
Response: {
  reply: string,
  audioUrl?: string // For text-to-speech
}
```

### 4. Text-to-Speech
```javascript
// Convert AI response to voice
// Optional: Play bot responses as audio
const audio = await textToSpeech(botReply);
audio.play();
```

---

## 🚀 Current State

### Implemented (Frontend Only):
- ✅ Floating chatbot button
- ✅ Voice interface UI
- ✅ Message display
- ✅ Microphone button states
- ✅ Voice visualizer animation
- ✅ Chat history display
- ✅ Responsive design
- ✅ Animations and transitions
- ✅ Accessibility features

### Pending (Backend Integration):
- ⏳ Actual microphone input capture
- ⏳ Speech-to-text conversion
- ⏳ AI message processing
- ⏳ Real bot responses
- ⏳ Text-to-speech output
- ⏳ Conversation persistence
- ⏳ User authentication for chat
- ⏳ Chat history storage

---

## 📍 Location in App

The chatbot button appears on:
- ✅ Dashboard home page (`/dashboard`)
- ✅ Interview module (`/dashboard/interview`)
- ✅ Job Matching module (`/dashboard/job-matching`)
- ✅ Enhancement module (`/dashboard/enhancement`)
- ✅ CV Analyzer module (`/dashboard/cv-analyzer`)
- ✅ Career Insights module (`/dashboard/behavior`)

**Not visible on:**
- Landing page
- About page
- Login/Register pages
- Feedback page

---

## 🧪 Testing the Feature

### Manual Testing:
1. **Navigate to Dashboard**
   ```
   Go to: http://localhost:3000/dashboard
   ```

2. **Open Chatbot**
   - Look for floating button in bottom-right
   - Click the button
   - Interface should slide up

3. **Test Voice Control**
   - Click the microphone button
   - Button should turn red and pulse
   - Visualizer bars should appear and animate
   - Status should show "Listening..."

4. **Stop Recording**
   - Click mic button again
   - Simulated user message should appear
   - Wait 1.5 seconds
   - Bot response should appear

5. **Close Interface**
   - Click X button in header
   - Interface should close
   - Floating button should reappear

---

## 📝 File Structure

```
components/
├── chatbot/
│   ├── ChatbotButton.tsx      # Floating button component
│   └── VoiceChatInterface.tsx # Main voice interface
└── layout/
    └── DashboardLayout.tsx     # Updated to include chatbot
```

---

## 🎯 Future Enhancements

### Phase 1 (Voice Input):
- [ ] Real microphone access
- [ ] Audio recording
- [ ] Speech-to-text integration
- [ ] Audio level detection

### Phase 2 (AI Integration):
- [ ] Connect to AI backend
- [ ] Real-time message processing
- [ ] Context-aware responses
- [ ] Career-specific knowledge

### Phase 3 (Voice Output):
- [ ] Text-to-speech responses
- [ ] Audio playback controls
- [ ] Voice selection options
- [ ] Speed controls

### Phase 4 (Advanced Features):
- [ ] Multi-language support
- [ ] Conversation history
- [ ] Export conversations
- [ ] Voice commands
- [ ] Interrupt handling
- [ ] Background noise cancellation

---

## 💡 Use Cases

### Career Guidance:
```
User: "What skills should I add to my resume?"
Bot: "Based on your industry, I recommend..."
```

### Interview Prep:
```
User: "Help me prepare for a technical interview"
Bot: "Let's practice some common questions..."
```

### Job Search:
```
User: "Find jobs in Kenya for software engineers"
Bot: "I found 15 relevant positions..."
```

### CV Review:
```
User: "Review my resume and give feedback"
Bot: "I'll analyze your resume. Please upload it..."
```

---

## 🔧 Customization Options

### Button Position:
```css
/* Current: bottom-6 right-6 */
/* Can be changed to: */
- bottom-8 right-8
- bottom-4 right-4
- left side: bottom-6 left-6
```

### Interface Size:
```css
/* Current: max-w-2xl h-[600px] */
/* Can be changed to: */
- max-w-3xl h-[700px] (larger)
- max-w-xl h-[500px] (smaller)
```

### Colors:
```javascript
// Change in component files
// Button gradient
className="bg-gradient-to-br from-[#YOUR-COLOR] to-[#YOUR-COLOR]"
```

---

## ✅ Summary

**Complete voice chatbot interface implemented!**
- ✅ Floating button with pulse animation
- ✅ Modal interface with chat history
- ✅ Voice visualizer with waveform
- ✅ Microphone controls (start/stop)
- ✅ Message display (user/bot)
- ✅ Responsive design
- ✅ Accessibility compliant
- ✅ Ready for backend integration

**The frontend is production-ready and waiting for voice/AI backend services!** 🎤🤖
