import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_qfyap2y',
        'template_pd7dtyw',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'CHWxwc13wer6V1uOB'
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
                     placeholder-gray-400 dark:placeholder-gray-500"
          />
          {errors.name && (
            <span className="text-red-500 dark:text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
                     placeholder-gray-400 dark:placeholder-gray-500"
          />
          {errors.email && (
            <span className="text-red-500 dark:text-red-400 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
                     placeholder-gray-400 dark:placeholder-gray-500"
          />
          {errors.message && (
            <span className="text-red-500 dark:text-red-400 text-sm">{errors.message.message}</span>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 text-white rounded-lg font-medium
            ${isSubmitting 
              ? 'bg-blue-400 dark:bg-blue-500' 
              : 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600'}
            transition-colors duration-200`}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 dark:text-green-400 text-center"
          >
            Message sent successfully!
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 dark:text-red-400 text-center"
          >
            Failed to send message. Please try again.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm; 