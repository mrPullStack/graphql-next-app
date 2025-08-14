'use client';

import { useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries';

type User = { id: string; name: string; email: string };

export default function UserProfile({ userId }: { userId: string }) {
    const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
        variables: { id: userId },
    });

    if (loading) return <p className="text-sm opacity-70">Loading…</p>;
    if (error) return <p className="text-red-600">Error: {error.message}</p>;

    return (
        <div className="rounded-2xl p-4 shadow">
        <h1 className="text-xl font-semibold">{data?.user.name}</h1>
        <p className="text-gray-600">{data?.user.email}</p>
        </div>
    );
}
