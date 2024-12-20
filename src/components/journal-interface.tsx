'use client'

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { JournalEntry, addJournalEntry, getUserJournalEntries, deleteJournalEntry, updateJournalEntry } from '@/lib/journalOperations';
import { Toaster, toast } from 'sonner';
import TipTapEditor from './tiptap-editor';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogFooter, AlertDialogAction } from "./ui/alert-dialog";

export default function JournalInterface() {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch journal entries when component mounts
  useEffect(() => {
    if (user) {
      loadJournalEntries();
    }
  }, [user]);

  const loadJournalEntries = async () => {
    try {
      setIsLoading(true);
      if (!user?.uid) return;
      const userEntries = await getUserJournalEntries(user.uid);
      setEntries(userEntries);
    } catch (error) {
      toast.error('Failed to load journal entries');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (!user?.uid) {
        toast.error('Please sign in to save journal entries');
        return;
      }

      if (!title.trim() || !content.trim()) {
        toast.error('Please provide both title and content');
        return;
      }

      if (isEditing && selectedEntry) {
        await updateJournalEntry(selectedEntry.id!, title, content);
        toast.success('Journal entry updated successfully');
      } else {
        await addJournalEntry(user.uid, title, content);
        toast.success('Journal entry saved successfully');
      }

      // Reset form and reload entries
      setTitle('');
      setContent('');
      setIsEditing(false);
      setSelectedEntry(null);
      await loadJournalEntries();
    } catch (error) {
      toast.error('Failed to save journal entry');
    }
  };

  const handleEdit = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setTitle(entry.title);
    setContent(entry.content);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (entryId: string) => {
    try {
      await deleteJournalEntry(entryId);
      toast.success('Journal entry deleted successfully');
      await loadJournalEntries();
    } catch (error) {
      toast.error('Failed to delete journal entry');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setIsEditing(false);
    setSelectedEntry(null);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Toaster />
      
      {/* Writing Guide Dialog */}
      <AlertDialog open={showGuide} onOpenChange={setShowGuide}>
        <AlertDialogContent className="max-w-4xl">
          <AlertDialogHeader>
            <AlertDialogTitle>How to Write an Effective Journal</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-4 mt-4">
                {[
                  {
                    title: "1. Find a Quiet Space",
                    description: "Choose a calm and distraction-free environment to focus on your thoughts."
                  },
                  {
                    title: "2. Set a Time",
                    description: "Establish a regular journaling routine - whether it's morning, evening, or during breaks."
                  },
                  {
                    title: "3. Be Honest",
                    description: "Write authentically about your feelings and experiences without self-judgment."
                  },
                  {
                    title: "4. Use Prompts",
                    description: "If you're stuck, try answering questions like 'How am I feeling today?' or 'What am I grateful for?'"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <h4 className="text-xl font-semibold text-gray-700">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Journal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-xl font-bold"
        />
        
        <TipTapEditor 
          content={content} 
          onChange={setContent}
        />

        <div className="flex gap-2">
          <Button onClick={handleSave} className="flex-1">
            {isEditing ? 'Update Entry' : 'Save Entry'}
          </Button>
          {isEditing && (
            <Button onClick={handleCancel} variant="outline">
              Cancel
            </Button>
          )}
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold">Your Journal Entries</h2>
          {entries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No journal entries yet. Start writing your first entry!
            </p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{entry.title}</h3>
                <p className="text-gray-600 text-sm">
                  {entry.createdAt.toDate().toLocaleDateString()}
                </p>
                <div className="mt-2 space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(entry)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(entry.id!)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

