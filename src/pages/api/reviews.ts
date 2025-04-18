import clientPromise from '@/utils/db';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: Record<string, never>, res: Record<string, any>) {
  try {
    const client = await clientPromise;
    const db = client.db('n8n');
    
    const now = new Date();

    const startOfYesterday = new Date(now);
    startOfYesterday.setHours(0, 0, 0, 0);
    
    const endOfYesterday = new Date(now);
    endOfYesterday.setHours(23, 59, 59, 999);

    const reviews = await db.collection('reviews').find({
      "createdAt": {
        "$gte": `${startOfYesterday.toISOString()}`,
        "$lte": `${endOfYesterday.toISOString()}`,
      }
    }).sort({ createdAt: -1 }).toArray();

    res?.status(200).json([reviews[0]]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}