import { useForm } from 'react-hook-form';
import { Send, Mail, User, Phone, Briefcase, Upload } from 'lucide-react';
import Button from './Button';

export interface JobApplicationFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  resume: FileList;
}

interface JobApplicationFormProps {
  positionTitle: string;
  onSubmit: (data: JobApplicationFormData) => Promise<void>;
  onCancel: () => void;
}

export default function JobApplicationForm({ positionTitle, onSubmit, onCancel }: JobApplicationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JobApplicationFormData>({
    mode: 'onChange',
    defaultValues: {
      position: positionTitle,
    },
  });

  const handleFormSubmit = async (data: JobApplicationFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
          Position Applied For *
        </label>
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="position"
            type="text"
            {...register('position', { required: 'Position is required' })}
            className="bg-secondary-800 w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient text-gray-300"
            placeholder="Position title"
            readOnly
          />
        </div>
        {errors.position && (
          <p className="mt-1 text-sm text-red-400">{errors.position.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="bg-secondary-800 w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient text-gray-300"
            placeholder="Your full name"
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
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
              className="bg-secondary-800 w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient text-gray-300"
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="bg-secondary-800 w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient text-gray-300"
              placeholder="+971 XX XXX XXXX"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
          Years of Experience *
        </label>
        <input
          id="experience"
          type="text"
          {...register('experience', { required: 'Experience is required' })}
          className="bg-secondary-800 w-full px-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient text-gray-300"
          placeholder="e.g., 3 years"
        />
        {errors.experience && (
          <p className="mt-1 text-sm text-red-400">{errors.experience.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-2">
          Cover Letter *
        </label>
        <textarea
          id="coverLetter"
          rows={5}
          {...register('coverLetter', { required: 'Cover letter is required' })}
          className="bg-secondary-800 w-full px-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient resize-none text-gray-300"
          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
        />
        {errors.coverLetter && (
          <p className="mt-1 text-sm text-red-400">{errors.coverLetter.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
          Resume/CV *
        </label>
        <div className="relative">
          <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            {...register('resume', {
              required: 'Resume is required',
              validate: (files) => {
                if (files && files.length > 0) {
                  const file = files[0];
                  const maxSize = 5 * 1024 * 1024; // 5MB
                  if (file.size > maxSize) {
                    return 'File size must be less than 5MB';
                  }
                  return true;
                }
                return 'Resume is required';
              }
            })}
            className="bg-secondary-800 w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus-gold-gradient text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-500 cursor-pointer"
          />
        </div>
        {errors.resume && (
          <p className="mt-1 text-sm text-red-400">{errors.resume.message}</p>
        )}
        <p className="mt-2 text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1 flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Application
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

