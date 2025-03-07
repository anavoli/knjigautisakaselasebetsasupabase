import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GuestbookEntry {
  id: string;
  name: string;
  visit_date: string;
  message: string;
  created_at: string;
}

const GuestbookEntries: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const { data, error } = await supabase
          .from('guestbook_entries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setEntries(data || []);
      } catch (error) {
        console.error('Error fetching entries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();

    // Subscribe to new entries
    const subscription = supabase
      .channel('guestbook_entries')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'guestbook_entries' 
      }, payload => {
        setEntries(current => [payload.new as GuestbookEntry, ...current]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-cream-100 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="text-brown-500" size={24} />
          <h2 className="text-2xl font-bold text-brown-800">Учитавање утисака...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="text-brown-500" size={24} />
        <h2 className="text-2xl font-bold text-brown-800">Утисци посетилаца</h2>
      </div>
      
      <div className="space-y-4">
        {entries.length === 0 ? (
          <p className="text-center text-brown-800">Још увек нема утисака. Будите први!</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-brown-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-brown-800">{entry.name}</h3>
                <span className="text-sm text-brown-500">{new Date(entry.visit_date).toLocaleDateString('sr-RS')}</span>
              </div>
              <p className="text-brown-800">{entry.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GuestbookEntries;