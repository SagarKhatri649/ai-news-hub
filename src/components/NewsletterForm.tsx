
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscriberType, setSubscriberType] = useState('');
  const [isRobot, setIsRobot] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!subscriberType) {
      toast({
        title: "Error",
        description: "Please select your subscriber type.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    // Reset form
    setEmail('');
    setSubscriberType('');
  };

  return (
    <div className="bg-primary/10 rounded-lg p-6">
      <h3 className="text-xl font-medium text-center mb-2">Subscribe Now</h3>
      <p className="text-sm text-center text-gray-600 mb-6">
        Get the latest Artificial Intelligence and Machine Learning industry insights to your inbox.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            value={subscriberType}
            onChange={(e) => setSubscriberType(e.target.value)}
            required
          >
            <option value="" disabled>Select Type:</option>
            <option value="enterprise">Enterprise</option>
            <option value="individual">Individual</option>
            <option value="researcher">Researcher</option>
            <option value="student">Student</option>
          </select>
        </div>
        
        <div className="mb-4 flex items-center space-x-2">
          <input
            type="checkbox"
            id="robot"
            className="rounded border-gray-300 text-primary focus:ring-primary"
            checked={isRobot}
            onChange={(e) => setIsRobot(e.target.checked)}
          />
          <label htmlFor="robot" className="text-sm text-gray-700">
            I am not a robot
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
