import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, query, where, orderBy, Timestamp, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export interface JournalEntry {
  id?: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Add a new journal entry
export const addJournalEntry = async (userId: string, title: string, content: string) => {
  try {
    const journalData: Omit<JournalEntry, 'id'> = {
      userId,
      title,
      content,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, 'journals'), journalData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding journal entry:', error);
    throw error;
  }
};

// Get all journal entries for a user
export const getUserJournalEntries = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'journals'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as JournalEntry[];
  } catch (error) {
    console.error('Error getting journal entries:', error);
    throw error;
  }
};

// Delete a journal entry
export const deleteJournalEntry = async (entryId: string) => {
  try {
    await deleteDoc(doc(db, 'journals', entryId));
  } catch (error) {
    console.error('Error deleting journal entry:', error);
    throw error;
  }
};

// Update a journal entry
export const updateJournalEntry = async (entryId: string, title: string, content: string) => {
  try {
    const journalRef = doc(db, 'journals', entryId);
    await updateDoc(journalRef, {
      title,
      content,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Error updating journal entry:', error);
    throw error;
  }
}; 