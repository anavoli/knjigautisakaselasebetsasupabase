import React, { useState } from 'react';
import { PenTool } from 'lucide-react';
import { supabase } from '../lib/supabase';

const GuestbookForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    visit_date: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('guestbook_entries')
        .insert([formData]);
      
      if (error) throw error;
      
      setFormData({ name: '', visit_date: '', message: '' });
      alert('Хвала вам на утиску!');
    } catch (error) {
      console.error('Error:', error);
      alert('Дошло је до грешке. Молимо покушајте поново.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-cream-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <PenTool className="text-brown-500" size={24} />
        <h2 className="text-2xl font-bold text-brown-800">Оставите утисак</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="form-label">
            Име и презиме
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="visit_date" className="form-label">
            Датум посете
          </label>
          <input
            type="date"
            id="visit_date"
            required
            className="form-input"
            value={formData.visit_date}
            onChange={(e) => setFormData({ ...formData, visit_date: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Ваш утисак
          </label>
          <textarea
            id="message"
            required
            className="form-textarea"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-brown-500 text-white py-2 px-4 rounded-md transition-colors ${
            submitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-brown-800'
          }`}
        >
          {submitting ? 'Слање...' : 'Пошаљи утисак'}
        </button>
      </form>
    </div>
  );
};

export default GuestbookForm;