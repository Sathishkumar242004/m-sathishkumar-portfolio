import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2, User, FileText, Sparkles, Terminal, MessageCircle, Github, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ==========================================
// EMAILJS CONFIGURATION INSTRUCTIONS
// ==========================================
// Configuring direct EmailJS dashboard credentials for target pipeline:
// ==========================================
const EMAILJS_SERVICE_ID = 'service_lqushg9';
const EMAILJS_TEMPLATE_ID = 'template_vpdhwom';
const EMAILJS_PUBLIC_KEY = 'qqmyPU27st1u0JnKU';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: 'Website Design',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [automationLogs, setAutomationLogs] = useState<string[]>([]);

  const projectOptions = [
    'Website Design',
    'No-Code Website Building',
    'Logo & Brand Identity',
    'Visual Content Creation',
    'AI-Assisted Graphics'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const addLog = (message: string, delay: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setAutomationLogs((prev) => [...prev, message]);
        resolve();
      }, delay);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setSubmitError(null);

    // Form validation
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.email.trim()) {
      setValidationError('Please enter your email address.');
      return;
    }
    if (!validateEmail(formData.email.trim())) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please tell me about your project details.');
      return;
    }

    setIsSubmitting(true);
    setAutomationLogs(['[STATUS] Starting secure EmailJS delivery tunnel...']);

    try {
      await addLog('[STATUS] Validating form payload configuration...', 350);
      await addLog('[STATUS] Structuring dynamic email templates...', 350);
      await addLog('[STATUS] Preparing data stream for sathishmahendiran12@gmail.com...', 350);

      await addLog('[STATUS] Transferring packet to EmailJS API gateway...', 450);

      // Format template fields as specified by USER:
      // Name: {{name}}
      // Email: {{email}}
      // Project Type: {{project_type}}
      // Message: {{message}}
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        project_type: formData.projectType,
        message: formData.message.trim(),
        to_email: 'sathishmahendiran12@gmail.com',
        subject: 'New Portfolio Enquiry'
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        await addLog('[STATUS] Receipt received! Status code 200 OK.', 300);
        await addLog('[STATUS] Completed successfully! Sathishkumar notified.', 300);
        
        // Clear all form fields on success as requested
        setFormData({
          name: '',
          email: '',
          projectType: 'Website Design',
          message: ''
        });

        setIsSubmitting(false);
        setSubmitSuccess(true);
      } else {
        throw new Error(`EmailJS responded with status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('EmailJS Submission Error:', error);
      const errorMessage = error?.text || error?.message || 'Unknown network error. Please try again.';
      
      await addLog(`[ERROR] Transmission failed: ${errorMessage}`, 400);
      
      setIsSubmitting(false);
      setSubmitError(errorMessage);
    }
  };

  const startNewMessage = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Website Design',
      message: ''
    });
    setSubmitSuccess(false);
    setSubmitError(null);
    setValidationError(null);
    setAutomationLogs([]);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-bg/95 border-t border-neutral-900/60 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="contact-section-header">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Contact
          </h2>
          <div className="h-1 w-20 bg-neon-pink rounded mx-auto"></div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide mt-2">
            Let's Build Something Amazing
          </h3>
          <p className="text-neutral-400 text-sm max-w-md font-sans mx-auto leading-relaxed">
            Have a project, business idea, or creative vision?<br />Let's turn it into a professional digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-content-grid">
          
          {/* Quick Info Deck (Left Columns) - Premium Contact Cards */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-deck">
            
            {/* Email Card */}
            <motion.a
              href="mailto:sathishmahendiran12@gmail.com"
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl glass-morphism border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:shadow-neon-pink/5 block transition-all duration-300 bg-zinc-950/40 relative overflow-hidden group"
              id="contact-card-email"
            >
              <div className="absolute right-0 top-0 w-20 h-20 bg-neon-pink/5 rounded-full blur-xl group-hover:bg-neon-pink/10 transition-all duration-500"></div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 text-neon-pink flex items-center justify-center group-hover:bg-neon-pink group-hover:text-white transition-all duration-300 shadow shadow-neon-pink/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block font-bold">
                    Email Address
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-neon-pink transition-colors break-all font-mono">
                    sathishmahendiran12@gmail.com
                  </span>
                </div>
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/919363392225"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl glass-morphism border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:shadow-neon-pink/5 block transition-all duration-300 bg-zinc-950/40 relative overflow-hidden group"
              id="contact-card-whatsapp"
            >
              <div className="absolute right-0 top-0 w-20 h-20 bg-neon-pink/5 rounded-full blur-xl group-hover:bg-neon-pink/10 transition-all duration-500"></div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 text-neon-pink flex items-center justify-center group-hover:bg-neon-pink group-hover:text-white transition-all duration-300 shadow shadow-neon-pink/10">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block font-bold">
                    WhatsApp Message
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-neon-pink transition-colors font-mono">
                    +91 93633 92225
                  </span>
                </div>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/Sathishkumar242004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl glass-morphism border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:shadow-neon-pink/5 block transition-all duration-300 bg-zinc-950/40 relative overflow-hidden group"
              id="contact-card-github"
            >
              <div className="absolute right-0 top-0 w-20 h-20 bg-neon-pink/5 rounded-full blur-xl group-hover:bg-neon-pink/10 transition-all duration-500"></div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 text-neon-pink flex items-center justify-center group-hover:bg-neon-pink group-hover:text-white transition-all duration-300 shadow shadow-neon-pink/10">
                  <Github className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase block font-bold">
                    GitHub Profile
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-neon-pink transition-colors font-mono">
                    github.com/Sathishkumar242004
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Quick availability stats card */}
            <div className="p-6 rounded-2xl bg-neutral-950/40 border border-neutral-900 border-dashed text-xs text-neutral-500 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute"></span>
              <span className="font-mono pl-3">AVAILABLE FOR NEW PROJECTS // GET IN TOUCH</span>
            </div>
          </div>

          {/* Interactive Input Form (Right Columns) */}
          <div className="lg:col-span-7" id="contact-form-surface">
            <div className="p-8 rounded-3xl glass-morphism border-neutral-800/80 relative overflow-hidden bg-neutral-950/50">
              
              <AnimatePresence mode="wait">
                
                {/* 1. Form state: Idle */}
                {!isSubmitting && !submitSuccess && !submitError && (
                  <motion.form
                    key="contact-form-idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="portfolio-message-form"
                  >
                    {/* Double Columns Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5" id="form-group-name">
                        <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                          <User className="w-3.5 h-3.5" /> Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Elon Musk"
                          className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/40 transition-colors font-sans"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5" id="form-group-email">
                        <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                          <Mail className="w-3.5 h-3.5" /> Email Address *
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. address@domain.com"
                          className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/40 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Selector: Project style */}
                    <div className="space-y-1.5" id="form-group-type">
                      <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-neon-pink" /> Scope / Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-300 focus:outline-none focus:border-neon-pink transition-colors font-sans"
                      >
                        {projectOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-black text-neutral-300">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5" id="form-group-message">
                      <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold font-mono">
                        <FileText className="w-3.5 h-3.5" /> Project details *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, and goals..."
                        className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/40 transition-colors font-sans"
                      />
                    </div>

                    {/* Form Inline Validation Alert */}
                    {validationError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs flex items-center gap-2"
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{validationError}</span>
                      </motion.div>
                    )}

                    {/* Submit layout button */}
                    <button
                      type="submit"
                      id="form-submit-trigger"
                      className="w-full py-4 rounded-xl bg-neon-pink hover:bg-neon-pink-hover text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-neon-pink/20 transition-all cursor-pointer hover:shadow-neon-pink/35 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {/* 2. Form state: Submitting automation logs */}
                {isSubmitting && (
                  <motion.div
                    key="contact-form-submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    id="contact-log-panel"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Terminal className="w-5 h-5 text-neon-pink animate-pulse" />
                      <span className="text-xs font-mono font-bold text-neon-pink uppercase tracking-widest animate-pulse">
                        SENDING_MESSAGE_SESSION
                      </span>
                    </div>

                    {/* Simulated system log box */}
                    <div className="p-5 rounded-2xl bg-black border border-neutral-800 font-mono text-[11px] text-zinc-400 space-y-2.5 h-64 overflow-y-auto">
                      {automationLogs.map((log, index) => (
                        <div key={index} className="flex gap-2">
                          <span className="text-[#ff007f]">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                      <div className="w-2.5 h-4 bg-[#ff2a85] inline-block animate-pulse"></div>
                    </div>

                    <div className="text-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                      Sending contact details safely. Please wait...
                    </div>
                  </motion.div>
                )}

                {/* 3. Form state: Success delivery */}
                {submitSuccess && (
                  <motion.div
                    key="contact-form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                    id="contact-success-panel"
                  >
                    <div className="w-16 h-16 rounded-full bg-neon-pink/15 border border-neon-pink/30 flex items-center justify-center mx-auto shadow-lg shadow-neon-pink/10 animate-bounce">
                      <CheckCircle2 className="w-8 h-8 text-neon-pink" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                        Enquiry Received!
                      </h3>
                      <p className="text-neon-pink font-mono text-sm leading-relaxed font-bold max-w-md mx-auto">
                        Thank you! Your enquiry has been sent successfully. I will contact you soon.
                      </p>
                    </div>

                    {/* Reset form button */}
                    <button
                      onClick={startNewMessage}
                      className="px-5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neon-pink/40 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                      id="reset-form-trigger"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}

                {/* 4. Form state: Error callback */}
                {submitError && (
                  <motion.div
                    key="contact-form-error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                    id="contact-error-panel"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mx-auto shadow-lg shadow-red-500/10">
                      <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                        Submission Failed
                      </h3>
                      <p className="text-red-400 font-mono text-sm leading-relaxed font-bold">
                        Failed to send message. Please try again.
                      </p>
                      <p className="text-neutral-500 font-mono text-[10px] bg-black p-3.5 rounded-xl border border-neutral-800 max-w-sm mx-auto block break-all pt-2 text-left">
                        Log: {submitError}
                      </p>
                    </div>

                    {/* Back to form button */}
                    <button
                      onClick={() => setSubmitError(null)}
                      className="px-5 py-2.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-red-500/40 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                    >
                      TRY AGAIN
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
