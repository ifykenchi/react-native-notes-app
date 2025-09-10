import { ID } from "react-native-appwrite";
import databaseService from "./databaseService";

// Appwrite database and collection id
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    // Get Notes
    async getNotes() {
        const response = await databaseService.listDocuments(dbId, colId) as any;
        if (response.error) {
            return {error: response.error};
        }

        return {data: response};
    },

    // Add Notes
    async addNote(text: any) {
        if (!text) {
            return {error: 'Note text cannot be empty'}
        }

        const data = {
            text: text
        }

        const response = await databaseService.createDocument(
            dbId, 
            colId,
            data,
            ID.unique()
        );

        if (response?.error) {
            return {error: response.error};
        }

        return {data: response};
    },

    // Update Note
    async updateNote(id: any, text: any) {
        const response = await databaseService.updateDocument(dbId, colId, id, {
            text,
        });

        if (response?.error) {
            return {error: response.error};
        }

        return {data: response};
    },

    // Delete Note
    async deleteNote(id: any) {
        const response = await databaseService.deleteDocument(dbId, colId, id);
        if (response?.error) {
            return {error: response.error};
        }
        return {success: true};
    }
}

export default noteService;