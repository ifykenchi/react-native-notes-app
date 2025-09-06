import { Platform } from 'react-native';
import { Client, Databases } from 'react-native-appwrite';

const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT as any,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID as any, 
    db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID as any,
    col: {
        notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID as any
    }
};

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

switch (Platform.OS) {
    case 'ios':
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID as any);
        break;
    case 'android': 
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME as any);
        break;
}

const database = new Databases(client);

export { client, config, database };
