'use client';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '@/graphql/mutations';

export default function CreateUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
        // Optional cache update logic could go here
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUser({ variables: { name, email } });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 rounded-2xl p-4 shadow">
        <input
            className="rounded border p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <input
            className="rounded border p-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <button className="rounded-2xl bg-black px-4 py-2 text-white" type="submit" disabled={loading}>
            {loading ? 'Creating…' : 'Create User'}
        </button>

        {error && <p className="text-red-600">Error: {error.message}</p>}
        {data && <p className="text-green-700">User {data.createUser.name} created!</p>}
        </form>
    );
}
