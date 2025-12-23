import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: 'onChange'
  });

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (data: FormData) => {
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection.');
    }
  };

  return (
    <div className="w-full relative">
      {/* Toast Notification */}
      <div className="fixed top-24 right-8 z-[100] flex flex-col gap-4 pointer-events-none">
        <AnimatePresence mode="wait">
          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className={`pointer-events-auto min-w-[320px] max-w-md p-4 rounded-xl shadow-2xl border backdrop-blur-md flex items-start gap-4 ${status === 'success'
                ? 'bg-emerald-900/40 border-emerald-500/50 text-emerald-100'
                : 'bg-rose-900/40 border-rose-500/50 text-rose-100'
                }`}
            >
              <div className={`p-2 rounded-lg ${status === 'success' ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                }`}>
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                )}
              </div>

              <div className="flex-1 pt-1">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">
                  {status === 'success' ? 'Success' : 'Message Failed'}
                </h4>
                <p className="text-sm opacity-90 leading-relaxed font-medium">
                  {status === 'success'
                    ? 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                    : errorMessage
                  }
                </p>
              </div>

              <button
                onClick={() => setStatus('idle')}
                className="p-1 hover:bg-white/10 rounded-full transition-colors self-start"
              >
                <X className="w-4 h-4 opacity-50" />
              </button>

              {/* Progress Bar Loader */}
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className={`absolute bottom-0 left-0 h-1 rounded-b-xl ${status === 'success' ? 'bg-emerald-500/50' : 'bg-rose-500/50'
                  }`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="bg-secondary-900 w-full pl-10 pr-4 py-3 border border-gray-800 rounded-lg focus-gold-gradient text-white transition-all hover:border-gray-700"
              placeholder="Your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 font-medium">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="bg-secondary-900 w-full pl-10 pr-4 py-3 border border-gray-800 rounded-lg focus-gold-gradient text-white transition-all hover:border-gray-700"
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 font-medium">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject', { required: 'Subject is required' })}
            className="bg-secondary-900 w-full px-4 py-3 border border-gray-800 rounded-lg focus-gold-gradient text-white transition-all hover:border-gray-700"
            placeholder="What is this regarding?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500 font-medium">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              id="message"
              rows={6}
              {...register('message', { required: 'Message is required' })}
              className="bg-secondary-900 w-full pl-10 pr-4 py-3 border border-gray-800 rounded-lg focus-gold-gradient resize-none text-white transition-all hover:border-gray-700"
              placeholder="Tell us how we can help..."
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 font-medium">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full flex items-center justify-center gap-2 py-4 shadow-lg active:scale-95 transition-transform"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

