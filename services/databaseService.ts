import { database } from './appwrite';

const databaseService = {
    //List Documents
    async listDocuments(dbId: any, colId: any) {
        try {
            const response = await database.listDocuments(dbId, colId);
            return response.documents || [];
        } catch (error: any) {
            console.error('Error fetching documents: ', error.message);
            return {error: error.message};
        }
    },
    // Create Documents
    async createDocument(dbId: any, colId: any, data: any, id: any = null) {
        try {
            return await database.createDocument(dbId, colId, id || undefined, data);
        } catch (error: any) {
            console.error('Error creating document', error.message);
            return {
                error: error.message
            }
        }
    },

    // Update Document
    async updateDocument(dbId: any, colId: any, id: any, data: any) {
        try {
            return await database.updateDocument(dbId, colId, id, data);
        } catch (error: any) {
            console.error('Error updating document', error.message);
            return {
                error: error.message,
            };
        }
    },

    // Delete Document
    async deleteDocument(dbId: any, colId: any, id: any) {
        try {
            await database.deleteDocument(dbId, colId, id);
            return {success: true};
        } catch (error: any) {
            console.error('Error deleting document', error.message);
            return {
                error: error.message,
            };
        }
    },
}

export default databaseService;