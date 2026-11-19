import type { ProjectItem } from './types';

export async function loadItems( setIsLoading: (loading: boolean) => void, setError: (err: Error | null) => void): Promise<ProjectItem[]> {
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch("/data.json");
        if (!response.ok) {
            throw new Error(`Failed to load items: ${response.statusText}`);
        }
        return response.json() as Promise<ProjectItem[]>;
    } catch (err) {
        setError(err as Error);
        throw err;
    } finally {
        setIsLoading(false);
    }
}