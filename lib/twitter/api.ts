import type { TwitterResponse } from './types';

const API_BASE = 'https://x-video-dl.pages.dev/api/twitter';

export async function downloadTwitterMedia(url: string): Promise<TwitterResponse> {
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tweet data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error downloading Twitter media:', error);
    throw error;
  }
}