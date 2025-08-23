import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "688833d15de4053a767634ce", 
  requiresAuth: true // Ensure authentication is required for all operations
});
